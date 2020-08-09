var fixItem = document.getElementById("nav");
var menuHambur = document.getElementById("menu-hambur");
var lines = document.querySelectorAll(".line");
var menu = document.getElementById("menu");
function myFunction() {
  if (window.pageYOffset > 200) {
    fixItem.style.background = "#29323C";
  } else {
    fixItem.style.background = "transparent";
  }
}
menuHambur.addEventListener("click", () => {
  if (menu.style.width == "100%") {
    menu.style.width = "0";
    lines.forEach((line, index) => {
      if (index == 0) {
        line.style.top = "0";
      }
      if (index == 2) {
        line.style.top = "0";
      }
    });
  } else {
    lines.forEach((line, index) => {
      menu.style.width = "100%";
      if (index == 0) {
        line.style.top = "7px";
      }
      if (index == 2) {
        line.style.top = "-7px";
      }
    });
  }
});
