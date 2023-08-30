function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  return home;
}

export default function addHomeToMain() {
  const main = document.querySelector(".main");

  main.appendChild(createHome());
}
