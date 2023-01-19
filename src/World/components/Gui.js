import { GUI } from "dat.gui";

class DatGui {
  constructor(camera, donut, lights) {
    this.camera = camera;
    this.donutModel = donut;
    this.donut = this.donutModel.donut;
    this.lights = lights;

    this.currSpeed = {
      x: this.donut.radiansPerSecondX,
      y: this.donut.radiansPerSecondY,
      z: this.donut.radiansPerSecondZ,
    };

    this.gui = new GUI({
      width: 300,
    });

    this.setCameraFolder();
    this.setDirLightFolder();
    this.setAmbiLightFolder();
    this.setDonutFolder();
    this.setVelocityFolder();

    this.gui.add(this, "stop").name("Stop");
    this.gui.add(this, "play").name("Play");
    this.gui.add(this, "reset").name("Reset");
  }

  setDonutFolder() {
    this.donutFolder = this.gui.addFolder("Donut");
    this.donutFolder.add(this.donut.rotation, "x", -1, Math.PI * 2).name("X");
    this.donutFolder.add(this.donut.rotation, "y", -1, Math.PI * 2).name("Y");
    this.donutFolder.add(this.donut.rotation, "z", -1, Math.PI * 2).name("Z");
    this.donutFolder.close();
  }

  setCameraFolder() {
    this.cameraFolder = this.gui.addFolder("Camera");
    this.cameraFolder.add(this.camera.camera.position, "z", 2, 10).name("Z");
    this.cameraFolder.close();
  }

  setVelocityFolder() {
    this.velocityFolder = this.gui.addFolder("Velocity");
    this.velocityFolder.add(this.donut, "radiansPerSecondX", 0, 5).name("X");
    this.velocityFolder.add(this.donut, "radiansPerSecondY", 0, 5).name("Y");
    this.velocityFolder.add(this.donut, "radiansPerSecondZ", 0, 5).name("Z");
    this.velocityFolder.close();
  }

  setDirLightFolder() {
    this.dirLightFolder = this.gui.addFolder("Directional Light");
    this.dirLightFolder
      .addColor(new ColorGUIHelper(this.lights.sunLight, "color"), "value")
      .name("color");
    this.dirLightFolder.add(this.lights.sunLight, "intensity", 0, 20, 0.01);
  }

  setAmbiLightFolder() {
    this.ambiLightFolder = this.gui.addFolder("Ambient Light");
    this.ambiLightFolder
      .addColor(new ColorGUIHelper(this.lights.ambientLight, "color"), "value")
      .name("color");
    this.ambiLightFolder.add(this.lights.ambientLight, "intensity", 0, 2, 0.01);
  }

  reset() {
    this.donutModel.resetRotation();
    this.donutModel.resetRadiansPerSecond();
    this.camera.resetPosition();
    this.lights.resetLights();

    this.donutFolder.updateDisplay();
    this.velocityFolder.updateDisplay();
    this.cameraFolder.updateDisplay();
    this.dirLightFolder.updateDisplay();
    this.ambiLightFolder.updateDisplay();
  }

  stop() {
    this.currSpeed.x = this.donut.radiansPerSecondX;
    this.currSpeed.y = this.donut.radiansPerSecondY;
    this.currSpeed.z = this.donut.radiansPerSecondZ;
    this.donut.radiansPerSecondX = 0;
    this.donut.radiansPerSecondY = 0;
    this.donut.radiansPerSecondZ = 0;
    this.velocityFolder.updateDisplay();
  }

  play() {
    if (
      this.donut.radiansPerSecondX > 0 ||
      this.donut.radiansPerSecondZ > 0 ||
      this.donut.radiansPerSecondY > 0
    )
      return;

    this.donut.radiansPerSecondX = this.currSpeed.x;
    this.donut.radiansPerSecondY = this.currSpeed.y;
    this.donut.radiansPerSecondZ = this.currSpeed.z;
    this.velocityFolder.updateDisplay();
  }
}

export default DatGui;

// https://r105.threejsfundamentals.org/threejs/lessons/threejs-lights.html
class ColorGUIHelper {
  constructor(object, prop) {
    this.object = object;
    this.prop = prop;
  }
  get value() {
    return `#${this.object[this.prop].getHexString()}`;
  }
  set value(hexString) {
    this.object[this.prop].set(hexString);
  }
}
