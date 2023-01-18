import * as THREE from "three";
import Camera from "./components/Camera";
import Lights from "./components/Lights";
import Donut from "./components/Donut/Donut";

import Renderer from "./systems/Renderer";
import Resizer from "./systems/Resizer";
import Loop from "./systems/Loop";
import Controls from "./systems/Controls";
import DatGui from "./components/Gui";

export default class World {
  constructor(container) {
    this.scene = new THREE.Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.loop = new Loop(this.camera.camera, this.scene, this.renderer);
    this.controls = new Controls(this.camera.camera, this.renderer.domElement);
    this.resizer = new Resizer(this.camera.camera, this.renderer);

    this.donut = new Donut();
    this.lights = new Lights(this.scene, this.camera.camera, this.donut);
    this.scene.add(this.donut.donut);

    container.appendChild(this.renderer.domElement);

    this.loop.updatables.push(this.controls);
    this.loop.updatables.push(this.donut.donut);

    this.datGui = new DatGui(this.camera, this.donut);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}
