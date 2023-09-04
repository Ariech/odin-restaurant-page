function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  createMenuItems(menu);

  return menu;
}

function createMenuItems(menu) {
  for (let i = 0; i < 6; i++) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const menuItemImg = document.createElement("div");
    menuItemImg.classList.add("menu-item-image");

    const menuItemText = document.createElement("p");
    menuItemText.textContent = "Lorem ipsum dolor sit amet";
    menuItemText.classList.add("menu-item-text");

    menuItem.appendChild(menuItemImg);
    menuItem.appendChild(menuItemText);
    menu.appendChild(menuItem);
  }
}

export default function addMenuToMain() {
  const main = document.querySelector(".main");

  main.appendChild(createMenu());
}
