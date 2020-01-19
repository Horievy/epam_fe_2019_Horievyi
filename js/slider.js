function Slider(config) {
  const {sliderWrapper, slideInterval} = config;
  this.slider = sliderWrapper.querySelector('.slider');
  this.arrowNext = sliderWrapper.querySelector('.slider__btn-right');
  this.arrowPrev = sliderWrapper.querySelector('.slider__btn-left');

  this.speed = slideInterval || 1500;
  this.next = () => this.slider.appendChild(this.slider.firstElementChild);
  this.prev = () => this.slider.prepend(this.slider.lastElementChild);
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

const portfolioSliderConfig = {
  sliderWrapper: document.querySelector('.portfolio__items'),
  btnState: 'off',
  autoPlay: 'on',
};

const testimonialsSliderConfig = {
  sliderWrapper: document.querySelector('.testimonials__person-wrap'),
  slideInterval: 1000,
  animationSpeed: '1s',
};

function TestimonialsSlider(config) {
  const {sliderWrapper, animationSpeed} = config;
  Slider.call(this, config);
  const slides = sliderWrapper.querySelectorAll('.testimonials__person');

  slides.forEach((slide) => {
    slide.style.transition = animationSpeed || '0.5s';
  });
}

function PortfolioSlider(config) {
  const {btnState, autoPlay, sliderWrapper} = config;
  Slider.call(this, config);

  this.autoPlay = (autoPlay = 'on') => {
    if (autoPlay === 'off') {
      sliderWrapper.addEventListener('mouseleave', () => {
        clearInterval(this.timer);
      });
      clearInterval(this.timer);
    }
  };
  this.autoPlay(autoPlay);

  this.showButtons = (btnState = 'on') => {
    if (btnState === 'on') {
      this.arrowNext.style.display = 'block';
      this.arrowPrev.style.display = 'block';
    } else if (btnState === 'off') {
      this.arrowNext.style.display = 'none';
      this.arrowPrev.style.display = 'none';
    } else {
      throw new Error('Wrong input data');
    }
  };
  this.showButtons(btnState);
}

// eslint-disable-next-line no-unused-vars
const portfolioSlider = new PortfolioSlider(portfolioSliderConfig);
// eslint-disable-next-line no-unused-vars
const testimonialsSlider = new TestimonialsSlider(testimonialsSliderConfig);

