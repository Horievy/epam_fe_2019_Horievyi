// const next = (parent) => {
//   parent.appendChild(parent.firstElementChild);
// };

// const prev = (parent) => {
//   parent.prepend(parent.lastElementChild);
// };

// document.addEventListener('DOMContentLoaded', () => {
//   const slider = document.querySelector('.portfolio__items-wrap');
//   const arrowNext = document.querySelector('.menu-btn.menu-btn--right');
//   const arrowPrev = document.querySelector('.menu-btn');
//   const sliderWrapper = document.querySelector('.portfolio__items');
//   const sliderImages = document.querySelectorAll('.portfolio__image');
//   const time = 1500;

//   sliderImages.forEach((item) => {
//     item.addEventListener('mousedown', (e) => {
//       e.preventDefault();
//     });
//   });

//   const pos = {
//     start: 0,
//     end: 0,
//   };
//   slider.addEventListener('mousedown', (e) => {
//     const x = e.clientX;
//     pos.start = x;
//   });

//   slider.addEventListener('mouseup', (e) => {
//     const x = e.clientX;
//     pos.end = x;
//     if (pos.start - pos.end >= 150) {
//       next(slider);
//     } else if (pos.end - pos.start >= 150) {
//       prev(slider);
//     }
//   });

//   let timer = setInterval(() => next(slider), time);

//   sliderWrapper.addEventListener('mouseleave', () => {
//     timer = setInterval(() => next(slider), time);
//   });

//   sliderWrapper.addEventListener('mouseenter', () => {
//     clearInterval(timer);
//   });

//   arrowNext.addEventListener('click', () => next(slider));
//   arrowPrev.addEventListener('click', () => prev(slider));


//   // NextSlider

//   const secondSlider = document.querySelector('.testimonials__slider');
//   const secondSliderWrap = document.querySelector('.testimonials__person-wrap');
//   const arrowNext2 = document.querySelector('.testimonials__button-right');
//   const arrowPrev2 = document.querySelector('.testimonials__button-left');
  
//   let timer2 = setInterval(() => next(secondSlider), time);

//   secondSliderWrap.addEventListener('mouseleave', () => {
//     timer2 = setInterval(() => next(secondSlider), time);
//   });

//   secondSliderWrap.addEventListener('mouseenter', () => {
//     clearInterval(timer2);
//   });

//   arrowNext2.addEventListener('click', () => next(secondSlider));
//   arrowPrev2.addEventListener('click', () => prev(secondSlider));


//   secondSlider.addEventListener('mousedown', (e) => {
//     const x = e.clientX;
//     pos.start = x;
//   });

//   secondSlider.addEventListener('mouseup', (e) => {
//     const x = e.clientX;
//     pos.end = x;
//     if (pos.start - pos.end >= 150) {
//       next(secondSlider);
//     } else if (pos.end - pos.start >= 150) {
//       prev(secondSlider);
//     }
//   });
// });

function Slider() {
  this.next = () => this.slider.appendChild(this.slider.firstElementChild);
  this.prev = () => this.slider.prepend(this.slider.lastElementChild);
  this.arrowNext.addEventListener('click', this.next);
  this.arrowPrev.addEventListener('click', this.prev);

  this.timer = setInterval(() => this.next(), this.time);

  this.sliderWrapper.addEventListener('mouseleave', () => {
    this.timer = setInterval(() => this.next(), this.time);
  });

  this.sliderWrapper.addEventListener('mouseenter', () => {
    clearInterval(this.timer);
  });
}

function PortfolioSlider () {
  this.slider = document.querySelector('.portfolio__items-wrap');
  this.sliderWrapper = document.querySelector('.portfolio__items');
  this.arrowNext = document.querySelector('.menu-btn.menu-btn--right');
  this.arrowPrev = document.querySelector('.menu-btn');
  this.time = 1500;

  Slider.call(this);
}

const slider = new PortfolioSlider();

