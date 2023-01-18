import { MathUtils } from "three";
import DonutModel from "./Model";

class Donut {
  constructor() {
    this.donut = new DonutModel();
    this.donut.radiansPerSecondX = MathUtils.degToRad(10);
    this.donut.radiansPerSecondY = MathUtils.degToRad(10);
    this.donut.radiansPerSecondZ = MathUtils.degToRad(10);

    this.resetRotation();

    this.donut.tick = (delta) => {
      this.donut.rotation.z += delta * this.donut.radiansPerSecondZ;
      this.donut.rotation.x += delta * this.donut.radiansPerSecondX;
      this.donut.rotation.y += delta * this.donut.radiansPerSecondY;
    };
  }

  resetRotation() {
    this.donut.rotation.set(-0.5, -0.1, 0.8);
  }

  resetRadiansPerSecond() {
    this.donut.radiansPerSecondX = 0.17;
    this.donut.radiansPerSecondY = 0.17;
    this.donut.radiansPerSecondZ = 0.17;
  }
}

export default Donut;
