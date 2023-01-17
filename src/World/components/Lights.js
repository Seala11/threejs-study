import * as THREE from "three";

class Lights {
  constructor(scene) {
    this.light = new THREE.DirectionalLight("white", 6);
    this.light.position.set(10, 10, 10);

    this.point = new THREE.PointLight(0xffffff, 1, 10, 1);
    this.dir = new THREE.SpotLight(0xFFF04B, 0.4, 7, 0.8, 0.6, 0.8);
    this.ambi = new THREE.AmbientLight(0x404040, 1);
    this.hemi = new THREE.HemisphereLight(0xF5B999, 0x787DFF, 0.8);

    this.dir.position.set(3, 1, 2);
    this.dir.target.position.set(0, 0, 0);

    this.point.position.set(0, 1, 5);
    this.point.intensity = 0.1;

    return [this.light, this.point, this.ambi, this.hemi, this.dir];
  }
}

export default Lights;
