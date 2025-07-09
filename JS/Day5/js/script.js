let theme = document.documentElement;
console.log(theme);
let btns = document.querySelectorAll(".btn");
// console.log(btns)

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.currentTarget.classList)
    let btnClass = e.currentTarget.classList;
    if (btnClass.contains("btn1")) {
      theme.style.setProperty("--theme-color", "rgb(41, 157, 157)");
    } else if (btnClass.contains("btn2")) {
      theme.style.setProperty("--theme-color", "rgb(236, 58, 34)");
    } else if (btnClass.contains("btn3")) {
      theme.style.setProperty("--theme-color", "rgb(111, 41, 157)");
    } else {
      theme.style.setProperty("--theme-color", "rgb(205, 21, 58)");
    }
  });
});
