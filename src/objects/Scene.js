import { Group } from 'three';
import BasicLights from './Lights.js';
import Donut from './donut/Donut.js';

export default class SeedScene extends Group {
  constructor() {
    super();

    const donut = new Donut();
    const lights = new BasicLights();

    this.add(donut, lights);
  }

  update(timeStamp) {
    this.rotation.y = timeStamp / 10000;
  }
}