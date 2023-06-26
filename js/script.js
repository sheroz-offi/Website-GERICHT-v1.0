let d = document;
let Btn1 = d.querySelector(".a1");
let Btn2 = d.querySelector(".a2");
let Btn3 = d.querySelector(".a3");
let Btn4 = d.querySelector(".a4");
let ImgRes = d.querySelector(".img-res");
//!--------------------------------------------
let popUp = d.querySelector(".pop-up");
let popUpA = d.querySelector(".pop-up-close-a");
let popUpB = d.querySelector(".header-right-p");
let BurGerMenu = d.querySelector(".burger-menu");

let FunAni1 = (a, b, c, d) => {
  a.classList.add("active");
  a.style.color = "#dcca87";
  b.classList.remove("active");
  b.style.color = "white";
  c.classList.remove("active");
  c.style.color = "white";
  d.classList.remove("active");
  d.style.color = "white";
};
Btn1.onclick = () => {
  FunAni1(Btn1, Btn2, Btn3, Btn4);
  ImgRes.src = "img/1 res.png";
};
Btn2.onclick = () => {
  FunAni1(Btn2, Btn1, Btn3, Btn4);
  ImgRes.src = "img/res (1).jpg";
};
Btn3.onclick = () => {
  FunAni1(Btn3, Btn2, Btn1, Btn4);
  ImgRes.src = "img/res (2).jpg";
};
Btn4.onclick = () => {
  FunAni1(Btn4, Btn2, Btn3, Btn1);
  ImgRes.src = "img/res (3).jpg";
};

//!----------------------------------------------------

let openPopUp = () => {
  popUp.stayle.opacity = 1;
  popUp.stayle.visibility = "visible";
};

let ispopupopen;

let closePopUp = () => {
  const target = event.target;
  if (target === popUp) {
    popUp.style.opacity = 0;
    popUp.style.visibility = "hidden";
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "escape" && ispopupopen) {
      closePopUp();
    }
  });
};

popUpB.addEventListener("click", openPopUp);
BurGerMenu.addEventListener("click", openPopUp);
popUpA.addEventListener("click", closePopUp);

//!----------------------------------------------------

