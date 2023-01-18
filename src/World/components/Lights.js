import * as THREE from "three";

class Lights {
  constructor(scene, camera, donut) {
    this.scene = scene;
    this.camera = camera;
    this.donut = donut;
    this.color = 0xffffff;
    this.setSunLights();
    this.setAmbientLights();
  }

  setSunLights() {
    console.log(this.color);
    this.sunLight = new THREE.DirectionalLight(this.color, 6);
    this.sunLight.position.set(-1.5, 7, 3);
    this.scene.add(this.sunLight);
  }

  setAmbientLights() {
    this.ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(this.ambientLight);
  }

  resetSunLights() {
    this.sunLight.color.set(this.color);
    this.sunLight.intensity = 6;
  }
}

export default Lights;
