import * as THREE from "three";

class Lights {
  constructor(scene, camera, donut) {
    this.scene = scene;
    this.camera = camera;
    this.donut = donut;
    this.setSunLights();
    this.setAmbientLights();
  }

  setSunLights() {
    this.sunLight = new THREE.DirectionalLight(0xffffff, 6);
    this.sunLight.position.set(-1.5, 7, 3);
    this.scene.add(this.sunLight);
  }

  setAmbientLights() {
    this.ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(this.ambientLight);
  }
}

export default Lights;

