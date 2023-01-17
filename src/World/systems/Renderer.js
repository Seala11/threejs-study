import * as THREE from "three";

class Renderer {
  constructor() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });

    this.renderer.physicallyCorrectLights = true;

    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.toneMapping = THREE.CineonToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.renderer.setClearColor(0xd2b2e7, 1);
    return this.renderer;
  }
}

export default Renderer;
