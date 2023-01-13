import { Group } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import MODEL from './donut.glb';

export default class Donut extends Group {
  constructor() {
    const loader = new GLTFLoader();
    
    super();

    this.name = 'donut';

    loader.load(MODEL, (gltf)=>{
      this.add(gltf.scene);
    })
  }
}