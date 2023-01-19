import GithubLink from './World/components/GithubLink.js';
import World from "./World/World.js";

const world = new World(document.body);
document.body.style.margin = 0;
document.body.style.position = "relative";

const githubLink = new GithubLink();
document.body.appendChild(githubLink);

world.start();
