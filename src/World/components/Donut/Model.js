import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import MODEL from "./donut.glb";

export default class DonutModel extends Group {
  constructor() {
    super();
    this.name = "donut";
    
    this.dracoLoader = new DRACOLoader();
    this.dracoLoader.setDecoderConfig({type: 'js'});
    this.dracoLoader.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.4.1/"
    );

    this.GLTFLoader = new GLTFLoader();
    this.GLTFLoader.setDRACOLoader(this.dracoLoader);


    this.GLTFLoader.load(
      MODEL,
      (gltf) => {
        this.add(gltf.scene);
      },
      (xhr) => {
        // console.log(xhr, (xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
