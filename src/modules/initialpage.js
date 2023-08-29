function display() {
  const contentWrapper = document.getElementById("content");

  const h1 = document.createElement("h1");
  h1.textContent = "Restaurant";

  const img = document.createElement("img");
  img.src =
    "https://cdn.pixabay.com/photo/2023/08/15/06/31/bird-8191339_1280.jpg";

  const p = document.createElement("p");
  p.textContent = "Trial text";

  contentWrapper.appendChild(h1);
  contentWrapper.appendChild(img);
  contentWrapper.appendChild(p);
}

export { display };
