/* eslint-disable max-lines */
/* eslint-disable no-undef */
const main = document.querySelector('main');

const createAboutUsSection = () => {
  const itemFragment = document.createDocumentFragment();
  const aboutUsBootstrapWrap = makeBootstrapWrap();
  const aboutUsContainer = createElement('section', 'about-us');

  const createTitle = () => {
    const aboutUsTitle = createManiHeading('about-us__title-wrap', 'about-us__title heading-main', mainPage.aboutUs.title);
    const aboutUsSubtitle = createElement('p','about-us__title-info', mainPage.aboutUs.text);

    itemFragment
      .appendChild(aboutUsBootstrapWrap).firstChild
      .appendChild(aboutUsContainer)
      .appendChild(aboutUsTitle)
      .appendChild(aboutUsSubtitle);

    return itemFragment;
  };

  const createIconsColumn = () => {
    const iconsColumn = createElement('div', 'about-us__left-column');

    for (const key in mainPage.aboutUs.icons) {
      const item = createElement('div', `about-us__item about-us__item--${key}`);
      const title = createElement('h3', 'about-us__subtitle', `${mainPage.aboutUs.icons[key]}`);
      const icon = createElement('span', `about-us__icon about-us__icon--${key}`);

      aboutUsContainer
        .appendChild(iconsColumn)
        .appendChild(item)
        .appendChild(title)
        .after(icon);
    }

    return aboutUsContainer;
  };

  const createRightColumn = () => {
    const rightColumn = createElement('div', 'about-us__right-column');
    const playerWrap = createElement('div', 'about-us__player');
    const video = createElement('video',
      'about-us__video',
      `${mainPage.aboutUs.video.text}`,
      'src',
      `${mainPage.aboutUs.video.link}`);

    setMultiAttributes(video, {
      autoplay: null,
      loop: null,
      muted: null,
    });

    aboutUsContainer
      .appendChild(rightColumn)
      .appendChild(playerWrap)
      .appendChild(video);

    return aboutUsContainer;
  };

  createTitle();
  createIconsColumn();
  createRightColumn();

  return itemFragment;
};

const createLatestPosts = () => {
  const postFragment = document.createDocumentFragment();
  const postHeadingBootstrap = makeBootstrapWrap();
  const postHeadingSection = createElement('section', 'latest-post');

  const createTitle = () => {
    const postTitle = createManiHeading('latest-post__text-wrap', 'latest-post__title heading-main', `${mainPage.post.title}`);
    const postSubtitle = createElement('p','latest-post__title-info heading-main__subtitle', `${mainPage.post.text}`);

    postFragment
      .appendChild(postHeadingBootstrap).firstChild
      .appendChild(postHeadingSection)
      .appendChild(postTitle)
      .appendChild(postSubtitle);

    return postFragment;
  };

  const createPosts = () => {
    const postsWrap = createElement('div', 'post');
    const postsBootstrapWrap = makeBootstrapWrap();

    postFragment
      .appendChild(postsWrap)
      .appendChild(postsBootstrapWrap);

    mainPage.post.posts.forEach((item) => {
      const postItem = createElement('div', 'post__item post__item--main-page');
      const postWrap = createElement('div', 'post__wrap post__wrap--main-page');
      const postImg = createElement('img',
        'post__folder post__folder--main-page',
        '' ,
        'src',
        `${item.imgLink}`);

      const postTextWrap = createElement('div', 'post__text-wrap post__text-wrap--main-page');
      const postHeading = createElement('h3', 'post__heading post__heading--main-page');
      const postLink = createElement('a', 'post__link' , `${item.headingText}`);
      const postText = createElement('p', 'post__text post__text--main-page' , `${item.paragraphText}`);
      const infoBlock = createInfoBlock(item);

      postsBootstrapWrap.firstChild
        .appendChild(postItem)
        .appendChild(postWrap)
        .appendChild(postImg);

      postWrap
        .appendChild(postTextWrap)
        .appendChild(postHeading)
        .appendChild(postLink);

      postTextWrap.appendChild(postText);
      postTextWrap.appendChild(infoBlock);
    });

    return postFragment;
  };

  createTitle();
  createPosts();

  return postFragment;
};

const createPortfolioSection = () => {
  const portfolioFragment = document.createDocumentFragment();
  const portfolioBootstrapWrap = makeBootstrapWrap();
  const portfolioSection = createElement('section', 'portfolio');
  const portfolioItems = createElement('div', 'portfolio__items');

  const createTitle = () => {
    const portfolioTitle = createManiHeading('portfolio__title-wrap', 'portfolio__title heading-main', `${mainPage.portfolio.title}`);
    const portfolioSubtitle = createElement('p','portfolio__title-info heading-main__subtitle', `${mainPage.portfolio.text}`);

    portfolioFragment
      .appendChild(portfolioSection)
      .appendChild(portfolioBootstrapWrap).firstChild
      .appendChild(portfolioTitle)
      .appendChild(portfolioSubtitle);

    return portfolioFragment;
  };

  const createPortfolioItems = () => {
    const portfolioItemsWrap = createElement('div', 'portfolio__items-wrap slider');

    mainPage.portfolio.items.forEach((item) => {
      const portfolioItem = createElement('div', 'portfolio__item');
      const portfolioItemWrap = createElement('div', 'portfolio__item-wrap');
      const portfolioImg = createElement('img',
        'portfolio__image',
        '' ,
        'src',
        `${item.imgLink}`);

      portfolioItems
        .appendChild(portfolioItemsWrap)
        .appendChild(portfolioItem)
        .appendChild(portfolioItemWrap)
        .appendChild(portfolioImg);

      const portfolioTextWrap = createElement('div', 'portfolio__text-wrap');
      const portfolioItemName = createElement('h3', 'portfolio__item-name', `${item.title}`);
      const portfolioItemDescription = createElement('p', 'portfolio__item-description', `${item.subtitle}`);

      portfolioItemWrap
        .appendChild(portfolioTextWrap)
        .appendChild(portfolioItemName);
      portfolioTextWrap.appendChild(portfolioItemDescription);

      const itemPopUpWrap = createElement('div', 'item-popup');

      mainPage.portfolio.popUp.forEach((item) => {
        const itemPopUpIcon = createElement('div', `item-popup__icon-${item.iconModifyer}`);
        const itemPopUpLink = createElement('div',
          'item-popup__link',
          '',
          'href',
          '#');

        itemPopUpWrap
          .appendChild(itemPopUpLink)
          .appendChild(itemPopUpIcon);
      });
      portfolioItemWrap.appendChild(itemPopUpWrap);
    });

    portfolioBootstrapWrap.firstChild.appendChild(portfolioItems);

    return portfolioBootstrapWrap;
  };

  const createPortfolioButtons = () => {
    const portfolioBtnWrap = createElement('div', 'portfolio__btn-wrap');
    const portfolioMenuControl = createElement('div', 'portfolio__menu-control');
    const portfolioBtnLeft = createElement('button', 'menu-btn slider__btn-left');
    const portfolioBtnRight = createElement('button', 'menu-btn menu-btn--right slider__btn-right');
    const portfolioBtnExpandAll = createElement('a',
      'portfolio__btn btn btn--secondary',
      `${mainPage.portfolio.btnText}`,
      'href',
      '#');

    portfolioBtnWrap
      .appendChild(portfolioMenuControl)
      .appendChild(portfolioBtnLeft)
      .after(portfolioBtnRight);
    portfolioBtnWrap.appendChild(portfolioBtnExpandAll);
    portfolioItems.appendChild(portfolioBtnWrap);

    return portfolioBootstrapWrap;
  };

  createTitle();
  createPortfolioItems();
  createPortfolioButtons();

  return portfolioFragment;
};

const createTestimonialsSection = () => {
  const testimonialsFragment = document.createDocumentFragment();
  const testimonialsSection = createElement('section', 'testimonials');
  const testimonialsBootstrapWrap = makeBootstrapWrap();

  const createTitle = () => {
    const testimonialsTitle = createManiHeading('testimonials__title-wrap', 'testimonials__title heading-main', `${mainPage.testimonials.title}`);

    testimonialsFragment
      .appendChild(testimonialsSection)
      .appendChild(testimonialsBootstrapWrap).firstChild
      .appendChild(testimonialsTitle);

    return testimonialsFragment;
  };

  const createPersonBlock = () => {
    const testimonialsPersonWrap = createElement('div', 'testimonials__person-wrap');
    const testimonalsSlider = createElement('div', 'testimonials__slider slider');

    mainPage.testimonials.persons.forEach((item) => {
      const testimonialsPerson = createElement('div', 'testimonials__person person');
      const testimonialsTextWrap = createElement('div', 'testimonials__text');
      const testimonialsPersonQuote = createElement('p', 'person__quote', `${item.personQuote}`);
      const testimonialsPersonInfoWrap = createElement('p', 'person__info');
      const testimonialsPersonName = createElement('span', 'person__name', `${item.personName}`);
      const testimonialsPersonPosition = createElement('span', 'person__position', `${item.personRole}`);
      const testimonialsPersonImage = createElement('img',
        'testimonials__img person__photo',
        '' ,
        'src',
        `${item.image}`);

      testimonialsPersonInfoWrap
        .appendChild(testimonialsPersonName)
        .after(testimonialsPersonPosition);

      testimonialsPersonPosition.insertAdjacentHTML('beforebegin', '<br/>');

      testimonialsPersonWrap
        .appendChild(testimonalsSlider)
        .appendChild(testimonialsPerson)
        .appendChild(testimonialsTextWrap)
        .appendChild(testimonialsPersonQuote)
        .after(testimonialsPersonInfoWrap);

      testimonialsPerson.appendChild(testimonialsPersonImage);
    });

    const testimonialsBtnLeft = createElement('button', 'testimonials__button-left menu-btn slider__btn-left');
    const testimonialsBtnRight = createElement('button', 'testimonials__button-right menu-btn menu-btn--right slider__btn-right');

    testimonialsPersonWrap
      .appendChild(testimonialsBtnLeft)
      .after(testimonialsBtnRight);
    testimonialsBootstrapWrap.firstChild.appendChild(testimonialsPersonWrap);

    return testimonialsPersonWrap;
  };

  createTitle();
  createPersonBlock();

  return testimonialsFragment;
};

const createContactSection = () => {
  const contactFragment = document.createDocumentFragment();
  const contactSection = createElement('section', 'contact');
  const contactBodyWrap = createElement('div', 'contact__body');
  const contactBodyBootstrapWrap = makeBootstrapWrap();

  const createTitle = () => {
    const contactHeadingBootstrapWrap = makeBootstrapWrap();
    const contactTitle = createManiHeading('contact__title-wrap', 'contact__title heading-main', `${mainPage.contact.title}`);
    const contactSubtitle = createElement('p','contact__title-text', `${mainPage.contact.text}`);

    contactFragment
      .appendChild(contactSection)
      .appendChild(contactHeadingBootstrapWrap).firstChild
      .appendChild(contactTitle)
      .appendChild(contactSubtitle);

    return contactFragment;
  };

  const createContactBodyWrapper = () => {
    contactSection
      .appendChild(contactBodyWrap)
      .appendChild(contactBodyBootstrapWrap);

    return contactSection;
  };

  const createContactInfoBlock = () => {
    const contactInfo = createElement('div', 'contact__info');
    const contactInfoTitle = createElement('h3', 'contact__sub-heading', `${mainPage.contact.info.title}`);
    const contactInfoList = createElement('ul', 'contact__steps');

    mainPage.contact.info.items.forEach((item, index, arr) => {
      const contactInfoListItem = createElement('li', 'contact__step');
      if (arr[index] === arr[arr.length - 1]) {
        contactInfoListItem.classList.add('contact__step--last');
      }

      const contactInfoListItemTitle = createElement('h4', 'contact__step-title', `${item.title}`);
      const contactInfoListItemNumber = createElement('span', 'contact__li-num', `${item.number}`);
      const contactInfoListItemText = createElement('p', 'contact__step-text', `${item.text}`);

      contactInfoListItemTitle.prepend(contactInfoListItemNumber);
      contactInfoList
        .appendChild(contactInfoListItem)
        .appendChild(contactInfoListItemTitle)
        .after(contactInfoListItemText);
    });

    const followLinks = document.querySelector('.follow-links').cloneNode(true);
    followLinks.className = 'contact__links follow-links';
    contactInfo.appendChild(followLinks);

    contactBodyBootstrapWrap.firstChild
      .appendChild(contactInfo)
      .appendChild(contactInfoTitle)
      .after(contactInfoList);

    return contactBodyBootstrapWrap;
  };

  const createFormBlock = () => {
    const contactRightBlock = createElement('div', 'contact__right-block');
    const contactFormWrap = createElement('div', 'contact__form-wrap');
    const formWrap = createElement('div', 'contact__form form');

    contactBodyBootstrapWrap.firstChild
      .appendChild(contactRightBlock)
      .appendChild(contactFormWrap);

    const createFormTopMessage = () => {
      const contachMessageWrap = createElement('div', 'contact__message');
      const contactFormMessage = createElement('p', 'contact__message-text' , `${mainPage.contact.messageText}`);

      contactFormWrap
        .appendChild(contachMessageWrap)
        .appendChild(contactFormMessage);

      contactFormWrap.appendChild(formWrap);

      return contactFormWrap;
    };

    const createFormActiveElements = () => {
      const formBtn = createElement('button', 'form__btn btn btn--primary', `${mainPage.contact.btnText}`);

      mainPage.contact.formItems.forEach((item) => {
        const formLabel = createElement('label', 'form__input-wrap', '', 'for', `${item.id}`);
        const formInputTitle = createElement('span', 'form__input-title', `${item.title}`);
        const fomrInput = createElement('input', 'form__input', '', 'type', `${item.type}`);
        fomrInput.setAttribute('id', `${item.id}`);

        formWrap
          .appendChild(formLabel)
          .appendChild(formInputTitle)
          .after(fomrInput);

        if (item.showPasText) {
          const showPassText = createElement('span', 'form__input-show-pass', `${item.showPasText}`);
          fomrInput.after(showPassText);
        }
      });
      formWrap.appendChild(formBtn);

      return formWrap;
    };

    const createFormAdditionalInfo = () => {
      const formAnnotation = createElement('p', 'form__annotation', `${mainPage.contact.annotation} `);
      const formEmail = createElement('a', 'form__annotation-link', `${mainPage.contact.email}` ,'title', `${mainPage.contact.email}`);
      formEmail.setAttribute('href', '#');
      const map = createElement('div', 'contact__map');
      formAnnotation.appendChild(formEmail);
      formWrap.appendChild(formAnnotation);
      contactFormWrap.appendChild(map);

      return contactFormWrap;
    };

    createFormTopMessage();
    createFormActiveElements();
    createFormAdditionalInfo();

    return contactFormWrap;
  };

  createTitle();
  createContactBodyWrapper();
  createContactInfoBlock();
  createFormBlock();

  return contactFragment;
};

initialize(main,
  createAboutUsSection(),
  createLatestPosts(),
  createPortfolioSection(),
  createTestimonialsSection(),
  createContactSection());

