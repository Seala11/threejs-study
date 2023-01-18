import { GUI } from "dat.gui";

class DatGui {
  constructor(camera, donut) {
    this.camera = camera;
    this.donutModel = donut;
    this.donut = this.donutModel.donut;

    this.currSpeed = {
      x: this.donut.radiansPerSecondX,
      y: this.donut.radiansPerSecondY,
      z: this.donut.radiansPerSecondZ,
    };

    this.gui = new GUI({
      width: 300,
    });

    this.setDonutFolder();
    this.setCameraFolder();
    this.setVelocityFolder();

    this.gui.add(this, "reset");
    this.gui.add(this, "stop");
    this.gui.add(this, "play");
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

  reset() {
    this.donutModel.resetRotation();
    this.donutModel.resetRadiansPerSecond();
    this.camera.resetPosition();

    this.donutFolder.updateDisplay();
    this.velocityFolder.updateDisplay();
    this.cameraFolder.updateDisplay();
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
