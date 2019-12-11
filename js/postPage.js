const createPostOnPostPage = () => {
  // Main post section
  const postSection = makeElement('section', `post post-image post-page`);
  const bootstrapWrap = makeBootstrapWrap();
  const dateWrap = makeElement('div', 'post__date-wrap post__date-wrap--small');
  const postDate = makeElement('div', 'post__date');
  const year = makeElement('p', 'post__year', postPage.item.year);
  const month = makeElement('p', 'post__month', postPage.item.month);
  const monthDay = makeElement('p', 'post__date-name', postPage.item.day);

  main.appendChild(bootstrapWrap);
  bootstrapWrap.firstChild.appendChild(postSection)
      .appendChild(dateWrap)
      .appendChild(postDate);

  const dateFragments = [year, month, monthDay];
  makeMultiAppending(dateFragments, postDate);

  const postItem = makeElement('div',
      'post__item post__item--image post__item--small');
  const postHeading = makeElement('h2',
      'post__heading post__heading--post-page',
      postPage.item.heading);
  const postLine = makeElement('hr', 'post__line');
  const postInfo = makeElement('div', 'post-info');
  const postWrap = makeElement('div', 'post__wrap post__wrap--post-page');
  postSection.appendChild(postItem);

  const postFragments = [postHeading, postLine, postInfo, postWrap];
  makeMultiAppending(postFragments, postItem);

  const postInfoAuthor = makeElement('span',
      'post-info__text',
      postPage.item.byWho);
  const userIcon = makeElement('i', 'post-info__icon ti-user');
  postInfoAuthor.appendChild(userIcon);

  const postInfoComments = makeElement('span',
      'post-info__text',
      postPage.item.commentsAmount);
  const commentIcon = makeElement('i', 'post-info__icon ti-comment');
  postInfoComments.appendChild(commentIcon);

  const postIconItems = [postInfoAuthor, postInfoComments];
  makeMultiAppending(postIconItems, postInfo);

  const postFolder = makeElement('div', 'post__folder post__folder--post-page');
  const postImg = makeElement('img',
      'post__image',
      null,
      'src', postPage.item.imgLink);
  const postIcon = makeElement('i', 'ti-image post__icon post__icon--img');
  const postFolderItems = [postImg, postIcon];
  makeMultiAppending(postFolderItems, postFolder);

  const postTextWrap = makeElement('div',
      'post__text-wrap post__text-wrap--post-page');
  const innewWrappers = [postFolder, postTextWrap];
  makeMultiAppending(innewWrappers, postWrap);

  const postFirstText = makeElement('p',
      'post__text post__text--post-page',
      postPage.item.firstPostText);
  const postSecondText = makeElement('p',
      'post__text post__text--post-page',
      postPage.item.secondPostText);
  const postThirdText = makeElement('p',
      'post__text post__text--post-page',
      postPage.item.thirdPostText);
  const postQuote = makeElement('p',
      'post__quote',
      postPage.item.postQuote);
  const postFourthText = makeElement('p',
      'post__text post__text--post-page',
      postPage.item.fourthPostText);

  const postTexts = [postFirstText,
    postSecondText,
    postThirdText,
    postQuote,
    postFourthText];
  makeMultiAppending(postTexts, postTextWrap);

  // Categories section
  const sidebarContainer = makeElement('div', 'sidebar');
  const categoriesWrap = makeElement('aside', 'categories sidebar__item');
  const categoriesTitle = makeElement('h4',
      'categories__title',
      postPage.categories.title);
  const categoriesList = makeElement('ul', 'categories__list');
  bootstrapWrap.firstChild.appendChild(sidebarContainer);
  const search = document.querySelector('.search');
  sidebarContainer.appendChild(search); /* Move search block
  to appropriate place*/
  sidebarContainer.appendChild(categoriesWrap);
  categoriesWrap.appendChild(categoriesTitle);
  categoriesWrap.appendChild(categoriesList);

  for (let i = 1; i <= 4; i++) {
    const categoriesItem = makeElement('li', 'categories__item');
    categoriesList.appendChild(categoriesItem);
  }

  const categoriesItems = document.querySelectorAll('.categories__item');

  categoriesItems.forEach((item, i) => {
    const categoriesItemIcon = makeElement('i',
        'categories__icon ti-angle-double-right');
    const categoriesLink = makeElement('a',
        'categories__link',
        postPage.categories[`item${i}`].linkText,
        'href', '#');
    const categoriesCount = makeElement('span',
        'categories__count',
        postPage.categories[`item${i}`].countText);
    item.appendChild(categoriesItemIcon);
    item.appendChild(categoriesLink);
    item.appendChild(categoriesCount);
  });

  // Tags section
  const tagsWrap = makeElement('aside', 'tags sidebar__item');
  const tagsTitle = makeElement('h4',
      'tags__title',
      postPage.tags.title);
  const tagsList = makeElement('ul', 'tags__list');
  sidebarContainer.appendChild(tagsWrap);
  tagsWrap.appendChild(tagsTitle);
  tagsWrap.appendChild(tagsList);

  for (let i = 0; i <= 11; i++) {
    const tagsItem = makeElement('li', 'tags__item');
    tagsList.appendChild(tagsItem);
  }

  const tagsItems = document.querySelectorAll('.tags__item');
  tagsItems.forEach((item, i) => {
    const tagsLink = makeElement('a',
        'tags__link',
        postPage.tags[`item${i}`].linkText,
        'href', '#');
    item.appendChild(tagsLink);
  });

  // Recent posts section
  const recentPostWrap = makeElement('aside', 'recent sidebar__item');
  const recentPostTitle = makeElement('h4',
      'crecent__title',
      postPage.recentPosts.title);
  sidebarContainer.appendChild(recentPostWrap);
  recentPostWrap.appendChild(recentPostTitle);

  for (let i = 0; i < 2; i++) {
    const recentItem = makeElement('div', 'recent__item');
    recentPostWrap.appendChild(recentItem);
  }

  const recentItems = document.querySelectorAll('.recent__item');
  recentItems.forEach((item) => {
    const recentAva = makeElement('div', 'recent__image avatar');
    const recentInfo = makeElement('div', 'recent__info');

    item.appendChild(recentAva);
    item.appendChild(recentInfo);
  });

  const recentInfoCollection = document.querySelectorAll('.recent__info');
  recentInfoCollection.forEach((item, i) => {
    const recentName = makeElement('a',
        'recent__name',
        postPage.recentPosts[`item${i}`].name);
    const recentDate = makeElement('p',
        'recent__date',
        postPage.recentPosts[`item${i}`].calendar);

    item.appendChild(recentName);
    item.appendChild(recentDate);
  });

  const recentDates = document.querySelectorAll('.recent__date');
  recentDates.forEach((item) => {
    const recentIcon = makeElement('i', 'ti-calendar recent__icon');

    item.appendChild(recentIcon);
  });

  // Twitter section
  const twitterWrap = makeElement('aside', 'twitter');
  sidebarContainer.appendChild(twitterWrap);
  const twitterTitle = makeElement('h4',
      'twitter__title',
      postPage.twitter.title);
  const twitterLink = makeElement('a',
      'ttwitter__link',
      null,
      'href', '#');
  const twitterAuthor = makeElement('a',
      'twitter__author',
      postPage.twitter.author,
      'href', '#');
  const twitterText = makeElement('p',
      'twitter__text',
      postPage.twitter.text);
  const twitterDate = makeElement('p',
      'twitter__date',
      postPage.twitter.date);

  const twitterItems = [twitterTitle,
    twitterLink,
    twitterAuthor,
    twitterText,
    twitterDate];
  makeMultiAppending(twitterItems, twitterWrap);

  const twitterIcon = makeElement('i', 'twitter__icon ti-twitter-alt');
  twitterLink.appendChild(twitterIcon);

  for (let i = 0; i <= 2; i++) {
    const twitterHashtag = makeElement('span',
        'twitter__hashtag',
        postPage.twitter[`hashtag${i}`]);
    twitterText.appendChild(twitterHashtag);
  }

  const share = document.querySelector('#share-container');
  main.appendChild(share);/* Move share section to appropriate place*/

  // Pagination section
  const reviewGrid = makeBootstrapWrap();
  main.appendChild(reviewGrid);
  const pagination = makeElement('div',
      'pagination pagination--post-page');
  reviewGrid.firstChild.appendChild(pagination);

  const paginationList = makeElement('ul',
      'pagination__list pagination__list--post-page');
  pagination.appendChild(paginationList);

  for (let i = 0; i < 2; i++) {
    const paginationItem = makeElement('li', 'pagination__item');
    paginationList.appendChild(paginationItem);
  }

  const paginationLinkArrow = makeElement('a',
      'pagination__link pagination__link--arrow',
      null,
      'href', '#');
  const paginationLink = makeElement('a',
      'pagination__link pagination__link--arrow',
      postPage.pagination.btnText,
      'href', '#');
  const paginationIcon = makeElement('i',
      'pagination__icon ti-angle-left');
  paginationLinkArrow.appendChild(paginationIcon);

  const paginationItems = document.querySelectorAll('.pagination__item');
  paginationItems[0].appendChild(paginationLinkArrow);
  paginationItems[1].appendChild(paginationLink);

  // Feedback section
  const feedbackWrap = makeElement('div', 'feedback');
  const feedbackTitleWrap = makeElement('div', 'feedback__title-wrap');
  const feedbackTitle = makeElement('h2',
      'feedback__title',
      postPage.feedback.title);
  reviewGrid.firstChild.appendChild(feedbackWrap)
      .appendChild(feedbackTitleWrap)
      .appendChild(feedbackTitle);

  for (let i = 0; i < 3; i++) {
    let feedbackItem = makeElement('div', 'feedback__item');
    if (i === 1) {
      feedbackItem = makeElement('div',
          'feedback__item feedback__item--push');
    }
    feedbackWrap.appendChild(feedbackItem);
  };

  const feedbackItems = document.querySelectorAll('.feedback__item');
  feedbackItems.forEach((item) => {
    const feedbackAva = makeElement('div', 'feedback__avatar avatar');
    const feedbackTextWrap = makeElement('div', 'feedback__text-wrap');
    item.appendChild(feedbackAva);
    item.appendChild(feedbackTextWrap);
  });

  const feedbackTextWrappers = document.
      querySelectorAll('.feedback__text-wrap');
  feedbackTextWrappers.forEach((item, i) => {
    const feedbackAuthor = makeElement('h5',
        'feedback__author',
        postPage.feedback[`author${i}`].name);
    const feedbackText = makeElement('p',
        'feedback__text',
        postPage.feedback[`author${i}`].comment);
    const feedbackBtn = makeElement('button',
        'feedback__reply',
        postPage.feedback.btnText);

    const textItems = [feedbackAuthor, feedbackText, feedbackBtn];
    makeMultiAppending(textItems, item);
  });

  // Feedback form
  const bottomGrid = makeBootstrapWrap();
  main.appendChild(bottomGrid);
  const formBody = makeElement('div',
      'form',
      null,
      'action', '#');
  bottomGrid.firstChild.appendChild(formBody);

  for (let i = 0; i < 2; i++) {
    const formWrap = makeElement('div', 'form__wrap');
    formBody.appendChild(formWrap);
  };

  const formWraps = document.querySelectorAll('.form__wrap');
  console.log(formWraps[0]);
  const formText = makeElement('input',
      'form__personal',
      null,
      'type',
      'text');
  formText.setAttribute('placeholder', 'Name');
  const formEmail = makeElement('input',
      'form__personal',
      null,
      'type',
      'email');
  formEmail.setAttribute('placeholder', 'E-mail');
  formWraps[0].appendChild(formText);
  formWraps[0].appendChild(formEmail);

  const formMsg = makeElement('textarea',
      'form__message',
      null,
      'placeholder',
      'Message');
  formWraps[1].appendChild(formMsg);

  // Related posts section
  const relatedWrap = makeElement('div', 'related');
  bottomGrid.firstChild.appendChild(relatedWrap);
  const relatedTitleWrap = makeElement('div', 'related__title-wrap');
  const relatedTitle = makeElement('h2',
      'related__title',
      postPage.relatedPosts.title);
  relatedTitleWrap.appendChild(relatedTitle);
  const relatedSlider = makeElement('div', 'slider');
  relatedWrap.appendChild(relatedTitleWrap);
  relatedWrap.appendChild(relatedSlider);

  for (let i = 0; i < 2; i++) {
    const sliderItemWrap = makeElement('div', 'slider__item-wrap');
    relatedSlider.appendChild(sliderItemWrap);
  };

  const sliderItemsWrap = document.querySelectorAll('.slider__item-wrap');
  sliderItemsWrap.forEach((item, i) => {
    const sliderArrow = makeElement('i', 'slider__arrow');
    const sliderItem = makeElement('div', 'slider__item');
    if (i === 0) {
      sliderArrow.classList.add('slider__arrow--left', 'ti-angle-left');
      sliderItem.classList.add('slider__item--main');
    } else {
      sliderArrow.classList.add('slider__arrow--right', 'ti-angle-right');
      sliderItem.classList.add('slider__item--advice');
    }
    item.appendChild(sliderArrow);
    item.appendChild(sliderItem);
  });

  const sliderItems = document.querySelectorAll('.slider__item');
  sliderItems.forEach((item, i) => {
    const sliderText = makeElement('p',
        'slider__text',
        postPage.relatedPosts[`item${i}`].text);
    const sliderPopUp = makeElement('div', 'item-popup');
    const sliderPopUpWrap = makeElement('div', 'item-popup__wrap');
    sliderPopUp.appendChild(sliderPopUpWrap);

    item.appendChild(sliderText);
    item.appendChild(sliderPopUp);
  });

  const sliderPopUps = document.querySelectorAll('.item-popup__wrap');
  sliderPopUps.forEach((popUp) => {
    const iconClasses = ['ti-link', 'ti-comments', 'ti-email'];
    iconClasses.forEach((item) => {
      const sliderIcon = makeElement('i', `item-popup__icon ${item}`);
      const sliderLink = makeElement('a',
          'item-popup__link',
          null,
          'href', '#');
      sliderLink.appendChild(sliderIcon);
      popUp.appendChild(sliderLink);
    });
  });
};

createPostOnPostPage();
