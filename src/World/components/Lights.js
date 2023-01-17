import * as THREE from "three";

class Lights {
  constructor() {
    this.light = new THREE.DirectionalLight("white", 8);
    this.light.position.set(10, 10, 10);

    return this.light;
  }
}

export default Lights;
