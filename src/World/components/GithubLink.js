class GithubLink {
  constructor() {
    this.githubLink = document.createElement("a");
    this.githubLink.textContent = "github";
    this.githubLink.target = "_blank";
    this.githubLink.href = "https://github.com/Seala11/threejs-study";
    this.githubLink.style.position = "absolute";
    this.githubLink.style.bottom = "10px";
    this.githubLink.style.right = "10px";

    return this.githubLink;
  }
}

export default GithubLink;