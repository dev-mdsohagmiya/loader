let all_li = document.querySelectorAll(".loder ul li");
function loding(value, time) {
  setTimeout(() => {
    all_li[value].style.backgroundColor = "gold";
  }, time);
}
function lodingRepeater() {
  loding(0, 500);
  loding(1, 1000);
  loding(2, 1500);
  loding(3, 2000);
  setInterval(() => {
    all_li.forEach((value) => {
      value.style.backgroundColor = "#f2f3f4";
      lodingRepeater();
    });
  }, 2500);
}
lodingRepeater();
