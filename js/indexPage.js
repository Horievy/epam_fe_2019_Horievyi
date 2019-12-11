const makeAboutUsSection = () => {
  const $ = mainPage.aboutUs;
  const indexFramgent = document.createDocumentFragment();
  const aboutUsBootstrapWrap = makeBootstrapWrap();
  const aboutUsContainer = makeElement('section', 'about-us');
  const aboutUsTitle = createManiHeading('about-us__title-wrap', 'about-us__title heading-main', $.title);
  const aboutUsSubtitle = makeElement('p','about-us__title-info', $.text);

  indexFramgent.appendChild(aboutUsBootstrapWrap).firstChild
    .appendChild(aboutUsContainer)
    .appendChild(aboutUsTitle)
    .appendChild(aboutUsSubtitle);

  const iconsColumn = makeElement('div', 'about-us__left-column');

  for (const key in $.icons) {
    const item = makeElement('div', `about-us__item about-us__item--${key}`);
    const title = makeElement('h3', 'about-us__subtitle', `${$.icons[key]}`);
    const icon = makeElement('span', `about-us__icon about-us__icon--${key}`);

    aboutUsContainer.appendChild(iconsColumn)
      .appendChild(item)
      .appendChild(title)
      .after(icon);
  }

  const rightColumn = makeElement('div', 'about-us__right-column');
  const playerWrap = makeElement('div', 'about-us__player');
  const video = makeElement('video',
    'about-us__video',
    `${$.video.text}`,
    'src',
    `${$.video.link}`);

  setAttributes(video, {
    autoplay: '',
    loop: '',
    muted: '',
  });

  aboutUsContainer.appendChild(rightColumn)
    .appendChild(playerWrap)
    .appendChild(video);

  main.appendChild(indexFramgent);
};

const makeLatestPosts = () => {
  const $ = mainPage.post;
  const postFragment = document.createDocumentFragment();
  const postHeadingBootstrap = makeBootstrapWrap();
  const postHeadingSection = makeElement('section', 'latest-post');
  const postTitle = createManiHeading('latest-post__text-wrap', 'latest-post__title heading-main', `${$.title}`);
  const postSubtitle = makeElement('p','latest-post__title-info heading-main__subtitle', `${$.text}`);

  postFragment.appendChild(postHeadingBootstrap)
    .firstChild
    .appendChild(postHeadingSection)
    .appendChild(postTitle)
    .appendChild(postSubtitle);

  const postsWrap = makeElement('div', 'post');
  const postsBootstrapWrap = makeBootstrapWrap();

  postFragment.appendChild(postsWrap)
    .appendChild(postsBootstrapWrap);

  $.posts.forEach((item, index) => {
    const postItem = makeElement('div', 'post__item post__item--main-page');
    const postWrap = makeElement('div', 'post__wrap post__wrap--main-page');
    const postImg = makeElement('img',
      'post__folder post__folder--main-page',
      '' ,
      'src',
      `${item.imgLink}`);

    const postTextWrap = makeElement('div', 'post__text-wrap post__text-wrap--main-page');
    const postHeading = makeElement('h3', 'post__heading post__heading--main-page');
    const postLink = makeElement('a', 'post__link' , `${item.headingText}`);
    const postText = makeElement('p', 'post__text post__text--main-page' , `${item.paragraphText}`);
    const infoBlock = createInfoBlock($, index);

    postsBootstrapWrap.firstChild
      .appendChild(postItem)
      .appendChild(postWrap)
      .appendChild(postImg);

    postWrap.appendChild(postTextWrap)
      .appendChild(postHeading)
      .appendChild(postLink);

    postTextWrap.appendChild(postText);
    postTextWrap.appendChild(infoBlock);
  });

  main.appendChild(postFragment);
};

const makePortfolioSection = () => {
  const $ = mainPage.portfolio;
  const portfolioFragment = document.createDocumentFragment();
  const portfolioBootstrapWrap = makeBootstrapWrap();
  const portfolioSection = makeElement('section', 'portfolio');
  const portfolioTitle = createManiHeading('portfolio__title-wrap', 'portfolio__title heading-main', `${$.title}`);
  const portfolioSubtitle = makeElement('p','portfolio__title-info heading-main__subtitle', `${$.text}`);

  portfolioFragment.appendChild(portfolioSection)
    .appendChild(portfolioBootstrapWrap).firstChild
    .appendChild(portfolioTitle)
    .appendChild(portfolioSubtitle);

  const portfolioItemsWrap = makeElement('div', 'portfolio__items');

  $.items.forEach((item) => {
    const portfolioItem = makeElement('div', 'portfolio__item');
    const portfolioItemWrap = makeElement('div', 'portfolio__item-wrap');
    const portfolioImg = makeElement('img',
      'portfolio__image',
      '' ,
      'src',
      `${item.imgLink}`);

    portfolioItemsWrap.appendChild(portfolioItem)
      .appendChild(portfolioItemWrap)
      .appendChild(portfolioImg);

    const portfolioTextWrap = makeElement('div', 'portfolio__text-wrap');
    const portfolioItemName = makeElement('h3', 'portfolio__item-name', `${item.title}`);
    const portfolioItemDescription = makeElement('p', 'portfolio__item-description', `${item.subtitle}`);

    portfolioItemWrap.appendChild(portfolioTextWrap)
      .appendChild(portfolioItemName);
    portfolioTextWrap.appendChild(portfolioItemDescription);

    const itemPopUpWrap = makeElement('div', 'item-popup');

    $.popUp.forEach((item) => {
      const itemPopUpIcon = makeElement('div', `item-popup__icon-${item.iconModifyer}`);
      const itemPopUpLink = makeElement('div',
        'item-popup__link',
        '',
        'href',
        '#');

      itemPopUpWrap.appendChild(itemPopUpLink)
        .appendChild(itemPopUpIcon);
    });
    portfolioItemWrap.appendChild(itemPopUpWrap);
  });

  portfolioBootstrapWrap.firstChild.appendChild(portfolioItemsWrap);

  const portfolioBtnWrap = makeElement('div', 'portfolio__btn-wrap');
  const portfolioMenuControl = makeElement('div', 'portfolio__menu-control');
  const portfolioBtnLeft = makeElement('button', 'menu-btn');
  const portfolioBtnRight = makeElement('button', 'menu-btn menu-btn--right');
  const portfolioBtnExpandAll = makeElement('a',
    'portfolio__btn btn btn--secondary',
    `${$.btnText}`,
    'href',
    '#');
  portfolioBtnWrap.appendChild(portfolioMenuControl)
    .appendChild(portfolioBtnLeft)
    .after(portfolioBtnRight);
  portfolioBtnWrap.appendChild(portfolioBtnExpandAll);
  portfolioBootstrapWrap.firstChild.appendChild(portfolioBtnWrap);

  main.appendChild(portfolioFragment);
};

const makeTestimonialsSection = () => {
  const $ = mainPage.testimonals;
  const testimonialsFragment = document.createDocumentFragment();
  const testimonalsSection = makeElement('section', 'testimonials');
  const testimonialsBootstrapWrap = makeBootstrapWrap();
  const testimonialsTitle = createManiHeading('testimonials__title-wrap', 'testimonials__title heading-main', `${$.title}`);
  const testimonalsPersonWrap = makeElement('div', 'testimonials__person-wrap');

  testimonialsFragment.appendChild(testimonalsSection)
    .appendChild(testimonialsBootstrapWrap).firstChild
    .appendChild(testimonialsTitle);

  $.persons.forEach((item) => {
    const testimonalsPerson = makeElement('div', 'testimonials__person person');
    const testimonalsTextWrap = makeElement('div', 'testimonials__text');
    const testimonalsPersonQuote = makeElement('p', 'person__quote', `${item.personQuote}`);
    const testimonalsPersonInfoWrap = makeElement('p', 'person__info');
    const testimonalsPersonName = makeElement('span', 'person__name', `${item.personName}`);
    const testimonalsPersonPosition = makeElement('span', 'person__position', `${item.personRole}`);
    const testimonalsBtnLeft = makeElement('button', 'testimonials__button-left menu-btn');
    const testimonalsBtnRight = makeElement('button', 'testimonials__button-right menu-btn menu-btn--right');
    const testimonalsPersonImage = makeElement('img',
      'testimonials__img person__photo',
      '' ,
      'src',
      `${item.image}`);

    testimonalsPersonInfoWrap.appendChild(testimonalsPersonName)
      .after(testimonalsPersonPosition);

    testimonalsPersonPosition.insertAdjacentHTML('beforebegin', '<br/>');

    testimonalsPersonWrap.appendChild(testimonalsPerson)
      .appendChild(testimonalsTextWrap)
      .appendChild(testimonalsPersonQuote)
      .after(testimonalsPersonInfoWrap);

    testimonalsPerson.appendChild(testimonalsPersonImage);

    testimonalsPersonWrap.appendChild(testimonalsBtnLeft)
      .after(testimonalsBtnRight);
  });
  testimonialsBootstrapWrap.firstChild.appendChild(testimonalsPersonWrap);

  main.appendChild(testimonialsFragment);
};

const makeContactSection = () => {
  const $ = mainPage.contact;
  const contactFragment = document.createDocumentFragment();
  const contactSection = makeElement('section', 'contact');
  const contactHeadingBootstrapWrap = makeBootstrapWrap();
  const contactTitle = createManiHeading('contact__title-wrap', 'contact__title heading-main', `${$.title}`);
  const contactSubtitle = makeElement('p','contact__title-text', `${$.text}`);

  contactFragment.appendChild(contactSection)
    .appendChild(contactHeadingBootstrapWrap).firstChild
    .appendChild(contactTitle)
    .appendChild(contactSubtitle);

  const contactBodyWrap = makeElement('div', 'contact__body');
  const contactBodyBootstrapWrap = makeBootstrapWrap();
  const contactInfo = makeElement('div', 'contact__info');
  const contactInfoTitle = makeElement('h3', 'contact__sub-heading', `${$.info.title}`);
  const contactInfoList = makeElement('ul', 'contact__steps');

  contactSection.appendChild(contactBodyWrap)
    .appendChild(contactBodyBootstrapWrap).firstChild
    .appendChild(contactInfo)
    .appendChild(contactInfoTitle)
    .after(contactInfoList);

  $.info.items.forEach((item, index, arr) => {
    const contactInfoListItem = makeElement('li', 'contact__step');
    if (arr[index] === arr[arr.length - 1]) {
      contactInfoListItem.classList.add('contact__step--last');
    }

    const contactInfoListItemTitle = makeElement('h4', 'contact__step-title', `${item.title}`);
    const contactInfoListItemNumber = makeElement('span', 'contact__li-num', `${item.number}`);
    const contactInfoListItemText = makeElement('p', 'contact__step-text', `${item.text}`);

    contactInfoListItemTitle.prepend(contactInfoListItemNumber);
    contactInfoList.appendChild(contactInfoListItem)
      .appendChild(contactInfoListItemTitle)
      .after(contactInfoListItemText);
  });

  const followLinks = document.querySelector('.follow-links').cloneNode(true);
  followLinks.className = 'contact__links follow-links';
  contactInfo.appendChild(followLinks);

  const contactRightBlock = makeElement('div', 'contact__right-block');
  const contactFormWrap = makeElement('div', 'contact__form-wrap');
  const contachMessageWrap = makeElement('div', 'contact__message');
  const contactFormMessage = makeElement('p', 'contact__message-text' , `${$.messageText}`);
  const formWrap = makeElement('div', 'contact__form form');

  contactBodyBootstrapWrap.firstChild.appendChild(contactRightBlock)
    .appendChild(contactFormWrap)
    .appendChild(contachMessageWrap)
    .appendChild(contactFormMessage);

  contactFormWrap.appendChild(formWrap);

  $.formItems.forEach((item) => {
    const formLabel = makeElement('label', 'form__input-wrap', '', 'for', `${item.id}`);
    const formInputTitle = makeElement('span', 'form__input-title', `${item.title}`);
    const fomrInput = makeElement('input', 'form__input', '', 'type', `${item.type}`);
    fomrInput.setAttribute('id', `${item.id}`);

    formWrap.appendChild(formLabel)
      .appendChild(formInputTitle)
      .after(fomrInput);

    if (item.showPasText) {
      const showPassText = makeElement('span', 'form__input-show-pass', `${item.showPasText}`);
      fomrInput.after(showPassText);
    }
  });

  const formBtn = makeElement('button', 'form__btn btn btn--primary', `${$.btnText}`);
  const formAnnotation = makeElement('p', 'form__annotation', `${$.annotation} `);
  const formEmail = makeElement('a', 'form__annotation-link', `${$.email}` ,'title', `${$.email}`);
  formEmail.setAttribute('href', '#');
  const map = makeElement('div', 'contact__map');
  formAnnotation.appendChild(formEmail);
  formWrap.appendChild(formBtn)
    .after(formAnnotation);
  contactFormWrap.appendChild(map);

  main.appendChild(contactFragment);
};

makeAboutUsSection();
makeLatestPosts();
makePortfolioSection();
makeTestimonialsSection();
makeContactSection();

