import { Group } from 'three';
import BasicLights from './Lights.js';
import Donut from './Donut/Donut.js';

export default class DonutScene extends Group {
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