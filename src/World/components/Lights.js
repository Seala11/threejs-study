import * as THREE from "three";

class Lights {
  constructor(scene, camera, donut) {
    this.scene = scene;
    this.camera = camera;
    this.donut = donut;
    this.dirColor = 0xffffff;
    this.ambiColor = 0xffffff;
    this.setSunLights();
    this.setAmbientLights();
  }

  setSunLights() {
    this.sunLight = new THREE.DirectionalLight(this.dirColor, 6);
    this.sunLight.position.set(-1.5, 7, 3);
    this.scene.add(this.sunLight);
  }

  setAmbientLights() {
    this.ambientLight = new THREE.AmbientLight(this.ambiColor, 1);
    this.scene.add(this.ambientLight);
  }

  resetLights() {
    this.sunLight.color.set(this.dirColor);
    this.sunLight.intensity = 6;

    this.ambientLight.color.set(this.ambiColor);
    this.ambientLight.intensity = 1;
  }
}

export default Lights;
