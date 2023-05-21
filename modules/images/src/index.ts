// TYPES
export type {ImageDataType, ImageType, ImageShape} from './types';
export type {ImageLoaderOptions} from './image-loader';

// LOADERS AND WRITERS
export {ImageLoader} from './image-loader';
export {ImageWriter} from './image-writer';

// IMAGE CATEGORY API

// Binary Image API
export {getBinaryImageMetadata} from './lib/category-api/binary-image-api';

// Parsed Image API
export {getSupportedImageFormats, isImageFormatSupported} from './lib/category-api/image-format';
export {isImageBitmapSupported} from './lib/category-api/image-type';

export {
  isImage,
  getImageType,
  getImageSize,
  getImageData
} from './lib/category-api/parsed-image-api';

// EXPERIMENTAL

// DEPRECATED

export {isImageTypeSupported, getDefaultImageType} from './lib/category-api/image-type';
