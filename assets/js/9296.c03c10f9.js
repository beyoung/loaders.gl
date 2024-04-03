"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9296],{99296:(i,t,n)=>{n.d(t,{Z:()=>d});var e=n(69199),o=n(81014),r=n(62602),s=n(76166),l=n(69180),a=n(47594),c=n(21973);const g=[0,0,0,255],h=[0,0,1],u={sizeUnits:"pixels",pointSize:{type:"number",min:0,value:10},getPosition:{type:"accessor",value:i=>i.position},getNormal:{type:"accessor",value:h},getColor:{type:"accessor",value:g},material:!0,radiusPixels:{deprecatedFor:"pointSize"}};class d extends e.Z{static{this.layerName="PointCloudLayer"}static{this.defaultProps=u}getShaders(){return super.getShaders({vs:"#version 300 es\n#define SHADER_NAME point-cloud-layer-vertex-shader\nin vec3 positions;\nin vec3 instanceNormals;\nin vec4 instanceColors;\nin vec3 instancePositions;\nin vec3 instancePositions64Low;\nin vec3 instancePickingColors;\nuniform float opacity;\nuniform float radiusPixels;\nuniform int sizeUnits;\nout vec4 vColor;\nout vec2 unitPosition;\nvoid main(void) {\ngeometry.worldPosition = instancePositions;\ngeometry.normal = project_normal(instanceNormals);\nunitPosition = positions.xy;\ngeometry.uv = unitPosition;\ngeometry.pickingColor = instancePickingColors;\nvec3 offset = vec3(positions.xy * project_size_to_pixel(radiusPixels, sizeUnits), 0.0);\nDECKGL_FILTER_SIZE(offset, geometry);\ngl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.), geometry.position);\nDECKGL_FILTER_GL_POSITION(gl_Position, geometry);\ngl_Position.xy += project_pixel_size_to_clipspace(offset.xy);\nvec3 lightColor = lighting_getLightColor(instanceColors.rgb, project_uCameraPosition, geometry.position.xyz, geometry.normal);\nvColor = vec4(lightColor, instanceColors.a * opacity);\nDECKGL_FILTER_COLOR(vColor, geometry);\n}\n",fs:"#version 300 es\n#define SHADER_NAME point-cloud-layer-fragment-shader\nprecision highp float;\nin vec4 vColor;\nin vec2 unitPosition;\nout vec4 fragColor;\nvoid main(void) {\ngeometry.uv = unitPosition;\nfloat distToCenter = length(unitPosition);\nif (distToCenter > 1.0) {\ndiscard;\n}\nfragColor = vColor;\nDECKGL_FILTER_COLOR(fragColor, geometry);\n}\n",modules:[o.Z,r.N,s.Z]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:"float64",fp64:this.use64bitPositions(),transition:!0,accessor:"getPosition"},instanceNormals:{size:3,transition:!0,accessor:"getNormal",defaultValue:h},instanceColors:{size:this.props.colorFormat.length,type:"unorm8",transition:!0,accessor:"getColor",defaultValue:g}})}updateState(i){const{changeFlags:t,props:n}=i;super.updateState(i),t.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll()),t.dataChanged&&function(i){const{header:t,attributes:n}=i;if(t&&n&&(i.length=t.vertexCount,n.POSITION&&(n.instancePositions=n.POSITION),n.NORMAL&&(n.instanceNormals=n.NORMAL),n.COLOR_0)){const{size:i,value:t}=n.COLOR_0;n.instanceColors={size:i,type:"unorm8",value:t}}}(n.data)}draw({uniforms:i}){const{pointSize:t,sizeUnits:n}=this.props,e=this.state.model;e.setUniforms(i),e.setUniforms({sizeUnits:l.iI[n],radiusPixels:t}),e.draw(this.context.renderPass)}_getModel(){const i=[];for(let t=0;t<3;t++){const n=t/3*Math.PI*2;i.push(2*Math.cos(n),2*Math.sin(n),0)}return new a.H(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new c.Z({topology:"triangle-list",attributes:{positions:new Float32Array(i)}}),isInstanced:!0})}}},21973:(i,t,n)=>{n.d(t,{Z:()=>r});var e=n(88026),o=n(88393);class r{id;topology;vertexCount;indices;attributes;userData={};constructor(i){const{attributes:t={},indices:n=null,vertexCount:r=null}=i;this.id=i.id||(0,e.h)("geometry"),this.topology=i.topology,n&&(this.indices=ArrayBuffer.isView(n)?{value:n,size:1}:n),this.attributes={};for(const[e,s]of Object.entries(t)){const i=ArrayBuffer.isView(s)?{value:s}:s;(0,o.h)(ArrayBuffer.isView(i.value),`${this._print(e)}: must be typed array or object with value as typed array`),"POSITION"!==e&&"positions"!==e||i.size||(i.size=3),"indices"===e?((0,o.h)(!this.indices),this.indices=i):this.attributes[e]=i}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(i){return`Geometry ${this.id} attribute ${i}`}_setAttributes(i,t){return this}_calculateVertexCount(i,t){if(t)return t.value.length;let n=1/0;for(const e of Object.values(i)){const{value:i,size:t,constant:o}=e;!o&&i&&t>=1&&(n=Math.min(n,i.length/t))}return(0,o.h)(Number.isFinite(n)),n}}},1937:(i,t,n)=>{n.d(t,{H:()=>s});const e="#if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))\nstruct AmbientLight {\nvec3 color;\n};\nstruct PointLight {\nvec3 color;\nvec3 position;\nvec3 attenuation;\n};\nstruct DirectionalLight {\nvec3 color;\nvec3 direction;\n};\nuniform AmbientLight lighting_uAmbientLight;\nuniform PointLight lighting_uPointLight[MAX_LIGHTS];\nuniform DirectionalLight lighting_uDirectionalLight[MAX_LIGHTS];\nuniform int lighting_uPointLightCount;\nuniform int lighting_uDirectionalLightCount;\nuniform bool lighting_uEnabled;\nfloat getPointLightAttenuation(PointLight pointLight, float distance) {\nreturn pointLight.attenuation.x\n+ pointLight.attenuation.y * distance\n+ pointLight.attenuation.z * distance * distance;\n}\n#endif\n",o={lightSources:{}};function r(i={}){const{color:t=[0,0,0],intensity:n=1}=i;return t.map((i=>i*n/255))}const s={name:"lights",vs:e,fs:e,getUniforms:function i(t=o){if("lightSources"in t){const{ambientLight:i,pointLights:n,directionalLights:e}=t.lightSources||{};return i||n&&n.length>0||e&&e.length>0?Object.assign({},function({ambientLight:i,pointLights:t=[],directionalLights:n=[]}){const e={};return e["lighting_uAmbientLight.color"]=i?r(i):[0,0,0],t.forEach(((i,t)=>{e[`lighting_uPointLight[${t}].color`]=r(i),e[`lighting_uPointLight[${t}].position`]=i.position,e[`lighting_uPointLight[${t}].attenuation`]=i.attenuation||[1,0,0]})),e.lighting_uPointLightCount=t.length,n.forEach(((i,t)=>{e[`lighting_uDirectionalLight[${t}].color`]=r(i),e[`lighting_uDirectionalLight[${t}].direction`]=i.direction})),e.lighting_uDirectionalLightCount=n.length,e}({ambientLight:i,pointLights:n,directionalLights:e}),{lighting_uEnabled:!0}):{lighting_uEnabled:!1}}if("lights"in t){const n={pointLights:[],directionalLights:[]};for(const i of t.lights||[])switch(i.type){case"ambient":n.ambientLight=i;break;case"directional":n.directionalLights?.push(i);break;case"point":n.pointLights?.push(i)}return i({lightSources:n})}return{}},defines:{MAX_LIGHTS:3}}},62602:(i,t,n)=>{n.d(t,{N:()=>l,s:()=>a});var e=n(1937);const o="uniform float lighting_uAmbient;\nuniform float lighting_uDiffuse;\nuniform float lighting_uShininess;\nuniform vec3  lighting_uSpecularColor;\nvec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {\nvec3 halfway_direction = normalize(light_direction + view_direction);\nfloat lambertian = dot(light_direction, normal_worldspace);\nfloat specular = 0.0;\nif (lambertian > 0.0) {\nfloat specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);\nspecular = pow(specular_angle, lighting_uShininess);\n}\nlambertian = max(lambertian, 0.0);\nreturn (lambertian * lighting_uDiffuse * surfaceColor + specular * lighting_uSpecularColor) * color;\n}\nvec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {\nvec3 lightColor = surfaceColor;\nif (lighting_uEnabled) {\nvec3 view_direction = normalize(cameraPosition - position_worldspace);\nlightColor = lighting_uAmbient * surfaceColor * lighting_uAmbientLight.color;\nfor (int i = 0; i < MAX_LIGHTS; i++) {\nif (i >= lighting_uPointLightCount) {\nbreak;\n}\nPointLight pointLight = lighting_uPointLight[i];\nvec3 light_position_worldspace = pointLight.position;\nvec3 light_direction = normalize(light_position_worldspace - position_worldspace);\nlightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);\n}\nfor (int i = 0; i < MAX_LIGHTS; i++) {\nif (i >= lighting_uDirectionalLightCount) {\nbreak;\n}\nDirectionalLight directionalLight = lighting_uDirectionalLight[i];\nlightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);\n}\n}\nreturn lightColor;\n}\nvec3 lighting_getSpecularLightColor(vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {\nvec3 lightColor = vec3(0, 0, 0);\nvec3 surfaceColor = vec3(0, 0, 0);\nif (lighting_uEnabled) {\nvec3 view_direction = normalize(cameraPosition - position_worldspace);\nfor (int i = 0; i < MAX_LIGHTS; i++) {\nif (i >= lighting_uPointLightCount) {\nbreak;\n}\nPointLight pointLight = lighting_uPointLight[i];\nvec3 light_position_worldspace = pointLight.position;\nvec3 light_direction = normalize(light_position_worldspace - position_worldspace);\nlightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);\n}\nfor (int i = 0; i < MAX_LIGHTS; i++) {\nif (i >= lighting_uDirectionalLightCount) {\nbreak;\n}\nDirectionalLight directionalLight = lighting_uDirectionalLight[i];\nlightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);\n}\n}\nreturn lightColor;\n}\n",r={};function s(i=r){if(!("material"in i))return{};const{material:t}=i;return t?function(i){const{ambient:t=.35,diffuse:n=.6,shininess:e=32,specularColor:o=[30,30,30]}=i;return{lighting_uAmbient:t,lighting_uDiffuse:n,lighting_uShininess:e,lighting_uSpecularColor:o.map((i=>i/255))}}(t):{lighting_uEnabled:!1}}const l={name:"gouraud-lighting",dependencies:[e.H],vs:o,defines:{LIGHTING_VERTEX:1},getUniforms:s},a={name:"phong-lighting",dependencies:[e.H],fs:o,defines:{LIGHTING_FRAGMENT:1},getUniforms:s}}}]);