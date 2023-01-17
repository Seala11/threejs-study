import World from "./World/World.js";

async function main() {
  const container = document.body;
  document.body.style.margin = 0;
  const world = new World(container);
  world.start();
}

main();
