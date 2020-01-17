function Slider(config) {
  const {sliderWrapper, time} = config;
  this.slider = sliderWrapper.querySelector('.testimonials__slider');
  this.arrowNext = sliderWrapper.querySelector('.testimonials__button-right');
  this.arrowPrev = sliderWrapper.querySelector('.testimonials__button-left');

  this.speed = time || 1500;
  this.next = () => this.slider.appendChild(this.slider.firstElementChild);
  this.prev = () => this.slider.prepend(this.slider.lastElementChild);
  this.arrowNext.addEventListener('click', this.next);
  this.arrowPrev.addEventListener('click', this.prev);
  this.interval = () => setInterval(() => this.next(), this.speed);
  this.timer = this.interval();

  sliderWrapper.addEventListener('mouseleave', () => {
    this.timer = this.interval();
  });

  sliderWrapper.addEventListener('mouseenter', () => {
    clearInterval(this.timer);
  });
}

const testimonalsSlider1 = {
  sliderWrapper: document.querySelector('.testimonials__person-wrap'),
  time: 2500,
  state: 'off'
};

// const test = new Slider(testimonalsSlider1);
//
// function TestimonalsSlider() {
//   this.slider = document.querySelector('.testimonials__slider');
//   this.sliderWrapper = document.querySelector('.testimonials__person-wrap');
//   this.arrowNext = document.querySelector('.testimonials__button-right');
//   this.arrowPrev = document.querySelector('.testimonials__button-left');
//
//   Slider.call(this);
//   this.autoplaySpeed = (speed) => {
//     this.speed = speed;
//     this.interval();
//   };
//
//   this.transitionSpeed = (speed) => {
//     [].forEach.call(this.slider.children, (item) => {
//       item.style.transition = speed;
//     });
//   };
// }

function PortfolioSlider(config) {
  const {state} = config;
  Slider.call(this, config);
  // this.autoPlay = (state = 'on') => {
  //   if (state === 'on') {
  //     this.timer = this.interval();
  //   } else if (state === 'off') {
  //     this.sliderWrapper.addEventListener('mouseleave', () => {
  //       clearInterval(this.timer);
  //     });
  //     clearInterval(this.timer);
  //   } else {
  //     throw new Error('Wrong input data');
  //   }
  // };
  // this.autoPlay(state);

  this.showButtons = (state = 'on') => {
    if (state === 'on') {
      this.arrowNext.style.display = 'block';
      this.arrowPrev.style.display = 'block';
    } else if (state === 'off') {
      this.arrowNext.style.display = 'none';
      this.arrowPrev.style.display = 'none';
    } else {
      throw new Error('Wrong input data');
    }
  };
  this.showButtons(state);
}

const portfolioSlider = new PortfolioSlider(testimonalsSlider1);
// portfolioSlider.autoPlay('on');
// portfolioSlider.showButtons('off');
// const testimonalsSlider = new TestimonalsSlider();
// testimonalsSlider.transitionSpeed('2s');
// testimonalsSlider.autoplaySpeed(3000);
//
