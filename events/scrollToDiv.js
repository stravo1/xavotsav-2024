let mobileSelect = document.querySelector(".mobile select");
let mobileSelectButton = document.querySelector(".mobile .select-button");
let desktopSelect = document.querySelector(".desktop select");
let desktopSelectButton = document.querySelector(".desktop .select-button");
let seletcedEvent = null;

mobileSelect.addEventListener("change", (e) => {
  seletcedEvent = e.target.value;
});

desktopSelect.addEventListener("change", (e) => {
  seletcedEvent = e.target.value;
});

desktopSelectButton.addEventListener("click", () => {
  if (!seletcedEvent) return;
  let elem = document.getElementById("desktop-" + seletcedEvent);
  let y = elem.offsetTop - window.innerWidth / 5;
  eventSectionDesktopScroller.scrollTo(0, y);
});

mobileSelectButton.addEventListener("click", () => {
  let elem = document.getElementById("mobile-" + seletcedEvent);
  let y = elem.getBoundingClientRect().top;
  window.scroll({
    top: y - window.innerWidth / 4 - window.scrollY,
    behavior: "smooth",
  });
});
