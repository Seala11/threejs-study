import { MathUtils } from "three";
import DonutScene from "../../objects/Scene";

class Donut {
  constructor() {
    this.donutScene = new DonutScene();
    this.radiansPerSecond = MathUtils.degToRad(10);

    this.donutScene.rotation.set(-0.5, -0.1, 0.8);

    this.donutScene.tick = (delta) => {
      this.donutScene.rotation.z += delta * this.radiansPerSecond;
      this.donutScene.rotation.x += delta * this.radiansPerSecond;
      this.donutScene.rotation.y += delta * this.radiansPerSecond;
    };

    return this.donutScene;
  }
}

export default Donut;
