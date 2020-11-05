const bars = document.querySelectorAll(".fa.fa-minus");
document
  .querySelector(".menu-bars")
  .addEventListener("mouseenter", function () {
    let char = 0;
    let timer = setInterval(onTick, 150);

    function onTick() {
      bars[char].classList.add("active");
      char++;
      if (char === bars.length) complete();
      return;
    }
    function complete() {
      clearInterval(timer);
      timer = null;
    }
    document.querySelector(".menu-bars").classList.add("active");
    document.querySelector(".nav-info").classList.add("active");
    document.querySelector(".slidebar").classList.add("active");
  });
document.querySelector(".slidebar").addEventListener("mouseleave", function () {
  let char = 0;
  let timer = setInterval(onTick, 90);

  function onTick() {
    bars[char].classList.remove("active");
    char++;
    if (char === bars.length) complete();
    return;
  }
  function complete() {
    clearInterval(timer);
    timer = null;
  }
  document.querySelector(".menu-bars").classList.remove("active");
  document.querySelector(".nav-info").classList.remove("active");
  document.querySelector(".slidebar").classList.remove("active");
});
