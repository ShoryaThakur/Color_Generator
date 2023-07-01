let containerEL = document.querySelector(".container");
for (let index = 0; index < 32; index++) {
  const containEL = document.createElement("div");
  containEL.classList.add("contain");
  containerEL.appendChild(containEL);
}
