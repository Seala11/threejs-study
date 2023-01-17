const setSize = (aspect, width, height, pixelRation, camera, renderer) => {
  camera.aspect = aspect;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  renderer.setPixelRatio(pixelRation);
};

class Resizer {
  constructor(camera, renderer) {
    this.setSize(camera, renderer);

    window.addEventListener("resize", () => {
      this.setSize(camera, renderer);
    });
  }

  setSize(camera, renderer) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.aspect = this.width / this.height;
    this.pixelRation = Math.min(window.devicePixelRatio, 2);

    camera.aspect = this.aspect;
    camera.updateProjectionMatrix();

    renderer.setSize(this.width, this.height);
    renderer.setPixelRatio(this.pixelRation);
  }
}

export default Resizer;
