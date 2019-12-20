const main = document.querySelector('main');
const mainBootstrapWrap = makeBootstrapWrap();

const createPost = () => {
  const itemFragment = document.createDocumentFragment();
  const mainSection = createElement('section', 'post post-image post-page post--pages');
  const postWrap = createElement('div', 'post__item post__item--image post__item--post-page');

  const postHeading = createElement('h1', 'post__heading post__heading--post-page', postPage.post.heading);
  const postAuthorWrap = createElement('div', 'post__author post__author--post-page post__author--music');
  const postAuthorName = createElement('span', 'post__author-name', postPage.post.authorName);

  const infoBlock = createInfoBlock(postPage.post, null);

  itemFragment
    .appendChild(mainBootstrapWrap).firstChild
    .appendChild(mainSection)
    .appendChild(postWrap)
    .appendChild(postHeading);

  postWrap
    .appendChild(postAuthorWrap)
    .appendChild(postAuthorName)
    .after(infoBlock);

  const createPostContent = () => {
    const postMainContentWrap = createElement('div', 'post__wrap post__wrap--post-page');
    const postImageWrap = createElement('div', 'post__folder post__folder--post-page');
    const postPicture = createElement(
      'img',
      'post__picture post-picture--music',
      null,
      'src',
      postPage.post.imgLink,
    );

    postWrap
      .appendChild(postMainContentWrap)
      .appendChild(postImageWrap)
      .appendChild(postPicture);

    const postTextWrap = createElement('div', 'post__text-wrap post__text-wrap--post-page');

    if (postPage.post.audio) {
      const audio = createElement(
        'audio',
        'post__audio post__audio--post-page',
        null,
        'controls',
        ' ');
      postTextWrap.appendChild(audio);
    }

    postPage.post.paragraphs.forEach((item) => {
      let paragraph;
      let title;
      let quote;

      for (const key in item) {
        if (key === 'title') {
          title = createElement(
            'h2',
            'post__heading post__heading--secondary',
            item[key],
          );
          postTextWrap.appendChild(title);
        }

        if (key === 'paragraph') {
          paragraph = createElement(
            'p',
            'post__text post__text--post-page',
            item[key],
          );
          postTextWrap.appendChild(paragraph);
        }

        if (key === 'quote') {
          quote = createElement(
            'p',
            'post__quote',
            item[key],
          );
          postTextWrap.appendChild(quote);
        }
      }
    });
    postMainContentWrap.appendChild(postTextWrap);

    return postWrap;
  };
  createPostContent();

  return itemFragment;
};

const createSidebar = () => {
  const sidebarWrapper = createElement('div', 'sidebar');
  const itemFragment = document.createDocumentFragment();

  itemFragment.appendChild(mainBootstrapWrap).firstChild
    .appendChild(sidebarWrapper);

  const createLatestPostsBlock = () => {
    const latestPostsWrapper = createElement('aside', 'recent sidebar__item');
    const latestPostsTitle = createElement(
      'h2',
      'recent__title',
      postPage.recent.title);
    const latestPostBtn = createElement(
      'a',
      'btn btn--secondary btn--latest-post',
      postPage.recent.btnText,
      'href',
      '#');

    sidebarWrapper
      .appendChild(latestPostsWrapper)
      .appendChild(latestPostsTitle);

    postPage.recent.items.forEach((item, index) => {
      const recentItem = createElement('div', 'recent__item');
      const recentItemPicture = createElement(
        'img',
        'recent__image',
        null,
        'src',
        item.imgLink);
      const recentItemInfoWrap = createElement('div', 'recent__info');
      const recentItemLink = createElement(
        'a',
        'recent__name',
        item.title,
        'href',
        '#');
      const infoBlock = createInfoBlock(postPage.recent.items, index);

      recentItem
        .appendChild(recentItemPicture)
        .after(recentItemInfoWrap);

      recentItemInfoWrap
        .appendChild(recentItemLink)
        .after(infoBlock);

      latestPostsWrapper
        .appendChild(recentItem)
        .after(latestPostBtn);
    });

    return latestPostsWrapper;
  };

  const createCategoriesBlock = () => {
    const categoriesWrapper = createElement('aside', 'categories sidebar__item');
    const categoriesTitle = createElement(
      'h2',
      'categories__title',
      postPage.categories.title);
    const categoriesList = createElement('ul', 'categories__list');

    categoriesWrapper
      .appendChild(categoriesTitle)
      .after(categoriesList);

    postPage.categories.items.forEach((item) => {
      const categoriesListItem = createElement('li', 'categories__item');
      const categoriesDropdownLinks = createElement('li', 'categories__links');
      const listItemCheckbox = createElement(
        'input',
        'categories__hidden-btm',
        null,
        'type',
        'checkbox');
      listItemCheckbox.setAttribute('id', item.id);
      const itemText = createElement(
        'label',
        'categories__toggler categories__heading',
        item.title,
        'for',
        item.id);
      const listItemCount = createElement(
        'span',
        'categories__count',
        item.count);

      categoriesList
        .appendChild(categoriesListItem)
        .appendChild(listItemCheckbox)
        .after(itemText);

      itemText.appendChild(listItemCount);

      item.references.forEach((dropdownItem) => {
        const dropdownListItem = createElement(
          'li',
          'categories__link',
          dropdownItem);

        categoriesDropdownLinks.appendChild(dropdownListItem);
      });
      categoriesListItem.appendChild(categoriesDropdownLinks);
    });
    sidebarWrapper.appendChild(categoriesWrapper);

    return categoriesWrapper;
  };

  const createTagsBlock = () => {
    const tagsWrapper = createElement('aside', 'tags sidebar__item');
    const tagsTitle = createElement(
      'h2',
      'tags__title',
      postPage.tags.title);
    const tagsList = createElement('ul', 'tags__list');

    sidebarWrapper
      .appendChild(tagsWrapper)
      .appendChild(tagsTitle)
      .after(tagsList);

    postPage.tags.items.forEach((item) => {
      const tagsItem = createElement('ul', 'tags__item');
      const tagsItemLink = createElement(
        'a',
        'tags__link',
        item,
        'href',
        '#');

      tagsList
        .appendChild(tagsItem)
        .appendChild(tagsItemLink);
    });

    return tagsWrapper;
  };

  createLatestPostsBlock();
  createCategoriesBlock();
  createTagsBlock();

  return itemFragment;
};

const createTotalSection = () => {
  const itemFragment = document.createDocumentFragment();
  const totalSectionMainWrap = createElement('div', 'total');
  const totalContentWrap = createElement('div', 'total__wrap');
  const totaLikesWrap = createElement('div', 'total__likes');
  const totaLikesCount = createElement(
    'span',
    'total__likes-count',
    postPage.total.likes,
  );
  const followLinks = document.querySelector('.follow-links').cloneNode(true);
  followLinks.className = 'follow-links';

  itemFragment
    .appendChild(totalSectionMainWrap)
    .appendChild(totalContentWrap)
    .appendChild(totaLikesWrap)
    .appendChild(totaLikesCount);
  totalContentWrap.appendChild(followLinks);
  mainBootstrapWrap.firstChild.appendChild(itemFragment);

  return itemFragment;
};

const createFeedbackSection = () => {
  const feedbackBootstrapWrap = makeBootstrapWrap();
  const feedbackBlockWrap = createElement('div', 'feedback');
  const feedbackTitleWrap = createElement('div', 'feedback__title-wrap');
  const feedbackTitle = createElement(
    'h2',
    'feedback__title',
    postPage.reviews.title);

  feedbackBootstrapWrap.firstChild
    .appendChild(feedbackBlockWrap)
    .appendChild(feedbackTitleWrap)
    .appendChild(feedbackTitle);

  const feedbackItemsWrap = createElement('div', 'feedback__items');
  feedbackBlockWrap.appendChild(feedbackItemsWrap);

  postPage.reviews.authors.forEach((author) => {
    const feedbackWrap = createElement('div', 'feedback__item');
    const feedbackTextWrap = createElement('div', 'feedback__text-wrap');
    const authorAva = createElement(
      'img',
      'feedback__item-author-avatar',
      null,
      'src',
      author.imgLink,
    );
    const authorName = createElement(
      'p',
      'feedback__author',
      author.name);

    const feedbackText = createElement(
      'p',
      'feedback__text',
      author.feedbackText);

    feedbackItemsWrap
      .appendChild(feedbackWrap)
      .appendChild(authorAva)
      .after(feedbackTextWrap);

    feedbackTextWrap
      .appendChild(authorName)
      .after(feedbackText);

    if (author.btn) {
      const feedbackBtn = createElement(
        'button',
        'feedback__reply',
        author.btn);

      feedbackTextWrap.appendChild(feedbackBtn);
    }
  });

  const feedbackBtnWrap = createElement('div', 'feedback__btn-wrap');
  const feedbackBtn = createElement(
    'a',
    'btn btn--secondary btn--feedback',
    postPage.reviews.btnText,
    'href',
    '#');

  feedbackBootstrapWrap
    .appendChild(feedbackBtnWrap)
    .appendChild(feedbackBtn);

  return feedbackBootstrapWrap;
};

main.appendChild(createPost());
main.appendChild(createSidebar());
main.appendChild(createTotalSection());
main.appendChild(createFeedbackSection());

