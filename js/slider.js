function Slider() {
  this.speed = 1500;
  this.next = () => this.slider.appendChild(this.slider.firstElementChild);
  this.prev = () => this.slider.prepend(this.slider.lastElementChild);
  this.arrowNext.addEventListener('click', this.next);
  this.arrowPrev.addEventListener('click', this.prev);
  this.interval = () => setInterval(() => this.next(), this.speed);

  this.sliderWrapper.addEventListener('mouseleave', () => {
    this.timer = this.interval();
  });

  this.sliderWrapper.addEventListener('mouseenter', () => {
    clearInterval(this.timer);
  });
}

function TestimonalsSlider() {
  this.slider = document.querySelector('.testimonials__slider');
  this.sliderWrapper = document.querySelector('.testimonials__person-wrap');
  this.arrowNext = document.querySelector('.testimonials__button-right');
  this.arrowPrev = document.querySelector('.testimonials__button-left');

  Slider.call(this);

  this.autoplaySpeed = (speed) => {
    this.speed = speed;
    this.interval();
  };

  this.transitionSpeed = (speed) => {
    [].forEach.call(this.slider.children, (item) => {
      item.style.transition = speed;
    });
  };
}

function PortfolioSlider() {
  this.slider = document.querySelector('.portfolio__items-wrap');
  this.sliderWrapper = document.querySelector('.portfolio__items');
  this.arrowNext = document.querySelector('.menu-btn.menu-btn--right');
  this.arrowPrev = document.querySelector('.menu-btn');

  Slider.call(this);
  this.autoPlay = (state = 'on') => {
    if (state === 'on') {
      this.timer = this.interval();
    } else if (state === 'off') {
      this.sliderWrapper.addEventListener('mouseleave', () => {
        clearInterval(this.timer);
      });
      clearInterval(this.timer);
    } else {
      throw new Error('Wrong input data');
    }
  };

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
}

const portfolioSlider = new PortfolioSlider();
portfolioSlider.autoPlay('off');
portfolioSlider.showButtons('off');
const testimonalsSlider = new TestimonalsSlider();
testimonalsSlider.transitionSpeed('2s');
testimonalsSlider.autoplaySpeed(3000);

