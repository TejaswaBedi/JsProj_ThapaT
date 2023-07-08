let on = document.getElementById("on");
let off = document.getElementById("off");
let pic = document.getElementById("pic");

off.addEventListener("click", () => {
  pic.innerHTML = `<img src="off.png">`;
});

on.addEventListener("click", () => {
  pic.innerHTML = `<img src="on.jpeg">`;
});
