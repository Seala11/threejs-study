import {
  Group,
  SpotLight,
  PointLight,
  AmbientLight,
  HemisphereLight,
} from "three";

export default class BasicLights extends Group {
  constructor(...args) {
    super(...args);

    const point = new PointLight(0xffffff, 1, 10, 1);
    const dir = new SpotLight(0xFFF04B, 0.4, 7, 0.8, 0.6, 0.8);
    const ambi = new AmbientLight(0x404040, 1);
    const hemi = new HemisphereLight(0xF5B999, 0x787DFF, 0.8);

    dir.position.set(3, 1, 2);
    dir.target.position.set(0, 0, 0);

    point.position.set(0, 1, 5);
    point.intensity = 0.1;

    this.add(point, ambi, hemi, dir);
  }
}
