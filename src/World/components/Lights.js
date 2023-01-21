import * as THREE from "three";

class Lights {
  constructor(scene, camera, donut) {
    this.scene = scene;
    this.camera = camera;
    this.donut = donut;
    this.dirColor = 0xffffff;
    this.ambiColor = 0xffffff;
    this.skyColor = 0xffffbb;
    this.groundColor = 0x080820;

    this.options = {
      spotLight: {
        color: 0xffffff,
        intensity: 0.4,
        distance: 7,
        angle: 0.8,
        penumbra: 0.6,
        decay: 2,
      },
      pointLight: {
        color: 0xffffff,
        intensity: 0.4,
        distance: 7,
        decay: 2,
      },
    };

    this.setSunLights();
    this.setAmbientLights();
    this.setHemisphereLight();
    this.setSpotLight();
    this.setPointLight();
  }

  setSunLights() {
    this.sunLight = new THREE.DirectionalLight(this.dirColor, 6);
    this.sunLight.position.set(-1.5, 7, 3);
    this.scene.add(this.sunLight);
  }

  setAmbientLights() {
    this.ambientLight = new THREE.AmbientLight(this.ambiColor, 1);
    this.scene.add(this.ambientLight);
  }

  setHemisphereLight() {
    this.hemiLight = new THREE.HemisphereLight(
      this.skyColor,
      this.groundColor,
      0.3
    );
    this.scene.add(this.hemiLight);
  }

  setSpotLight() {
    this.spotLight = new THREE.SpotLight(this.options.spotLight);
    this.spotLight.position.set(-1.5, 5, 3);
    this.scene.add(this.spotLight);
  }

  setPointLight() {
    this.pointLight = new THREE.PointLight(this.options.pointLight);
    this.pointLight.position.set(-1.5, 5, 3);
    this.scene.add(this.pointLight);
  }

  resetLights() {
    this.sunLight.color.set(this.dirColor);
    this.sunLight.intensity = 6;

    this.ambientLight.color.set(this.ambiColor);
    this.ambientLight.intensity = 1;

    this.hemiLight.color.set(this.skyColor);
    this.hemiLight.groundColor.set(this.groundColor);
    this.hemiLight.intensity = 0.3;

    this.spotLight.color.set(this.options.spotLight.color);
    this.spotLight.angle = this.options.spotLight.angle;
    this.spotLight.decay = this.options.spotLight.decay;
    this.spotLight.distance = this.options.spotLight.distance;
    this.spotLight.intensity = this.options.spotLight.intensity;
    this.spotLight.penumbra = this.options.spotLight.penumbra;

    this.pointLight.color.set(this.options.pointLight.color);
    this.pointLight.decay = this.options.pointLight.decay;
    this.pointLight.distance = this.options.pointLight.distance;
    this.pointLight.intensity = this.options.pointLight.intensity;
  }
}

export default Lights;
