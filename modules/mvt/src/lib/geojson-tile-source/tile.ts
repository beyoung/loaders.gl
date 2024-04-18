// loaders.gl
// SPDX-License-Identifier: MIT
// Copyright (c) vis.gl contributors
// Forked from https://github.com/mapbox/geojson-vt under compatible ISC license

export type GeoJSONTileFeature = GeoJSONTileGeometry & {
  type: 'Point' | 'LineString' | 'Polygon' | 'MultiPoint' | 'MultiLineString' | 'MultiPolygon';

  // book keeping
  id: string | number | null;
  properties?: Record<string, unknown>;

  // spatial extents
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
};

export type GeoJSONTileGeometry =
  | GeoJSONTilePointGeometry
  | GeoJSONTileLineGeometry
  | GeoJSONTilePolygonGeometry;

export type GeoJSONTilePointGeometry = {
  simplifiedType: 1;
  geometry: number[];
};

export type GeoJSONTileLineGeometry = {
  simplifiedType: 1;
  geometry: number[][];
};

export type GeoJSONTilePolygonGeometry = {
  simplifiedType: 1;
  geometry: number[][][];
};

export type GeoJSONTile = {
  features: GeoJSONTileFeature[]; // Feature[]; Doesn't seem JSON compatible??
  type?: number;
  properties?: Record<string, unknown>;

  // tile coordinates
  x: number;
  y: number;
  z: number;

  // spatial extents
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;

  transformed: boolean;
  numPoints: number;
  numSimplified: number;
  numFeatures: number;
  source: any | null;
};

export type CreateTileOptions = {
  maxZoom?: number;
  tolerance: number;
  extent: number;
  lineMetrics: boolean;
};

/**
 * Create a tile from features and tile index
 */
export function createTile(features: any[], z, tx, ty, options: CreateTileOptions): GeoJSONTile {
  const tolerance = z === options.maxZoom ? 0 : options.tolerance / ((1 << z) * options.extent);
  const tile: GeoJSONTile = {
    features: [],
    numPoints: 0,
    numSimplified: 0,
    numFeatures: features.length,
    source: null,
    x: tx,
    y: ty,
    z,
    transformed: false,
    minX: 2,
    minY: 1,
    maxX: -1,
    maxY: 0
  };
  for (const feature of features) {
    addFeature(tile, feature, tolerance, options);
  }
  return tile;
}

// eslint-disable-next-line complexity, max-statements
function addFeature(
  tile: GeoJSONTile,
  feature: GeoJSONTileFeature,
  tolerance: number,
  options: CreateTileOptions
) {
  tile.minX = Math.min(tile.minX, feature.minX);
  tile.minY = Math.min(tile.minY, feature.minY);
  tile.maxX = Math.max(tile.maxX, feature.maxX);
  tile.maxY = Math.max(tile.maxY, feature.maxY);

  const simplified: number[] = [];

  const geometry = feature.geometry;
  const type = feature.type;

  switch (type) {
    case 'Point':
    case 'MultiPoint':
      for (let i = 0; i < geometry.length; i += 3) {
        simplified.push(geometry[i], geometry[i + 1]);
        tile.numPoints++;
        tile.numSimplified++;
      }
      break;

    case 'LineString':
      addLine(simplified, geometry, tile, tolerance, false, false);
      break;

    case 'MultiLineString':
    case 'Polygon':
      for (let i = 0; i < geometry.length; i++) {
        addLine(simplified, geometry[i], tile, tolerance, type === 'Polygon', i === 0);
      }
      break;

    case 'MultiPolygon':
      for (const polygon of geometry) {
        for (const point of polygon) {
          addLine(simplified, point, tile, tolerance, true, i === 0);
        }
      }
      break;
  }

  if (simplified.length) {
    let properties: Record<string, unknown> | undefined = feature.properties;

    if (type === 'LineString' && options.lineMetrics) {
      properties = {};
      for (const key in feature.properties) {
        properties[key] = feature.properties[key];
      }
      // eslint-disable-next-line camelcase
      properties.mapbox_clip_start = geometry.start / geometry.size;
      // eslint-disable-next-line camelcase
      properties.mapbox_clip_end = geometry.end / geometry.size;
    }

    const tileFeature: GeoJSONTileFeature = {
      geometry: simplified,
      type,
      simplifiedType:
        type === 'Polygon' || type === 'MultiPolygon'
          ? 3
          : type === 'LineString' || type === 'MultiLineString'
          ? 2
          : 1,
      properties
    };
    if (feature.id !== null) {
      tileFeature.id = feature.id;
    }
    tile.features.push(tileFeature);
  }
}

// eslint-disable-next-line max-params, max-statements
function addLine(
  result: number[],
  geometry,
  tile: GeoJSONTile,
  tolerance: number,
  isPolygon: boolean,
  isOuter: boolean
): void {
  const sqTolerance = tolerance * tolerance;

  if (tolerance > 0 && geometry.size < (isPolygon ? sqTolerance : tolerance)) {
    tile.numPoints += geometry.length / 3;
    return;
  }

  const ring: number[] = [];

  for (let i = 0; i < geometry.length; i += 3) {
    if (tolerance === 0 || geometry[i + 2] > sqTolerance) {
      tile.numSimplified++;
      ring.push(geometry[i], geometry[i + 1]);
    }
    tile.numPoints++;
  }

  if (isPolygon) {
    rewind(ring, isOuter);
  }

  result.push(ring);
}

function rewind(ring: number[], clockwise?: boolean): void {
  let area = 0;
  for (let i = 0, j = ring.length - 2; i < ring.length; j = i, i += 2) {
    area += (ring[i] - ring[j]) * (ring[i + 1] + ring[j + 1]);
  }
  if (area > 0 === clockwise) {
    for (let i = 0, len = ring.length; i < len / 2; i += 2) {
      const x = ring[i];
      const y = ring[i + 1];
      ring[i] = ring[len - 2 - i];
      ring[i + 1] = ring[len - 1 - i];
      ring[len - 2 - i] = x;
      ring[len - 1 - i] = y;
    }
  }
}
