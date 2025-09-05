function getDirection() {
  return window.innerWidth <= 760 ? "vertical" : "horizontal";
}

function initializeSwiper(selector, options) {
  return new Swiper(selector, options);
}

function myPlugin({ swiper, extendParams, on }) {
  extendParams({
    debugger: false,
  });

  const logEvent = (eventName, ...args) => {
    if (!swiper.params.debugger) return;
    console.log(eventName, ...args);
  };

  on("init", () => logEvent("init"));
  on("click", () => logEvent("click"));
  on("tap", () => logEvent("tap"));
  on("doubleTap", () => logEvent("doubleTap"));
  on("sliderMove", () => logEvent("sliderMove"));
  on("slideChange", () =>
    logEvent("slideChange", swiper.previousIndex, "->", swiper.activeIndex)
  );
  on("slideChangeTransitionStart", () =>
    logEvent("slideChangeTransitionStart")
  );
  on("slideChangeTransitionEnd", () => logEvent("slideChangeTransitionEnd"));
  on("transitionStart", () => logEvent("transitionStart"));
  on("transitionEnd", () => logEvent("transitionEnd"));
  on("fromEdge", () => logEvent("fromEdge"));
  on("reachBeginning", () => logEvent("reachBeginning"));
  on("reachEnd", () => logEvent("reachEnd"));
}

// -------------------- اسلایدرها --------------------

// اسلایدر 1
const swiper1 = initializeSwiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// اسلایدر 2
const swiper2 = initializeSwiper(".swiper2", {
  modules: [myPlugin],
  slidesPerView: "auto",
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  debugger: true,
});

// اسلایدر 3
const swiper3 = initializeSwiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// اسلایدر 4
const swiper4 = initializeSwiper(".swiper3", {
  slidesPerView: "auto",
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// اسلایدر محصولات پرفروش
const swiperTopsell = initializeSwiper(".topsell .swiper3", {
  slidesPerView: "auto",
  spaceBetween: 23,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
