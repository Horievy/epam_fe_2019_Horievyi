const next = (parent) => {
  parent.appendChild(parent.firstElementChild);
};

const prev = (parent) => {
  parent.prepend(parent.lastElementChild);
};

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.portfolio__items-wrap');
  const arrowNext = document.querySelector('.menu-btn.menu-btn--right');
  const arrowPrev = document.querySelector('.menu-btn');
  const sliderWrapper = document.querySelector('.portfolio__items');
  const sliderImages = document.querySelectorAll('.portfolio__image');
  const time = 1500;

  sliderImages.forEach((item) => {
    item.addEventListener('mousedown', (e) => {
      e.preventDefault();
    });
  });

  const pos = {
    start: 0,
    end: 0,
  };
  slider.addEventListener('mousedown', (e) => {
    const x = e.clientX;
    pos.start = x;
  });

  slider.addEventListener('mouseup', (e) => {
    const x = e.clientX;
    pos.end = x;
    if (pos.start - pos.end >= 150) {
      next(slider);
    } else if (pos.end - pos.start >= 150) {
      prev(slider);
    }
  });

  let timer = setInterval(() => next(slider), time);

  sliderWrapper.addEventListener('mouseleave', () => {
    timer = setInterval(() => next(slider), time);
  });

  sliderWrapper.addEventListener('mouseenter', () => {
    clearInterval(timer);
  });

  arrowNext.addEventListener('click', () => next(slider));
  arrowPrev.addEventListener('click', () => prev(slider));
});

