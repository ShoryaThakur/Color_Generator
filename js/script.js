let containerEL = document.querySelector(".container");
for (let index = 0; index < 32; index++) {
  let containEL = document.createElement("div");
  containEL.classList.add("contain");
  containerEL.appendChild(containEL);
  const chars = "0123456789abcdef";
//   console.log(chars.length);
  const colorcodelength = 6;
  let colorcode = "";
  for (let j = 0; j < colorcodelength; j++) {
    let randomNum = Math.floor(Math.random() * chars.length);
    colorcode += chars.slice(randomNum, randomNum + 1);
    //   console.log(colorcode);
  }
  colorcode = "#" + colorcode;
  containEL.innerText = colorcode;
  containEL.style.backgroundColor = colorcode;
}
