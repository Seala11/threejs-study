import { MathUtils } from "three";
import DonutModel from './Model';

class Donut {
  constructor() {
    this.donut = new DonutModel();
    this.radiansPerSecond = MathUtils.degToRad(10);

    this.donut.rotation.set(-0.5, -0.1, 0.8);

    this.donut.tick = (delta) => {
      this.donut.rotation.z += delta * this.radiansPerSecond;
      this.donut.rotation.x += delta * this.radiansPerSecond;
      this.donut.rotation.y += delta * this.radiansPerSecond;
    };

    return this.donut;
  }
}

export default Donut;
