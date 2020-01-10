/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const main = document.querySelector('main');

function createPost(post) {
  const itemFragment = document.createDocumentFragment();
  const itemMainWrap = createElement('section', `post post--${post.postType}`);
  const bootstrapWrap = makeBootstrapWrap();
  const postWrap = createElement('div', 'post__wrap post__wrap--blog-page');

  itemFragment
    .appendChild(itemMainWrap)
    .appendChild(bootstrapWrap);

  function createPostImageFolder() {
    const postItem = createElement('div', `post__item post__item--${post.postType}`);
    if (post.imgLink) {
      const postFolder = createElement('div', `post__folder post__folder--${post.postType}`);
      const postImg = createElement('img',
        `post__image post__image--${post.postType}`,
        null, 'src',
        post.imgLink);
      postFolder.appendChild(postImg);

      bootstrapWrap.firstChild.appendChild(postItem)
        .appendChild(postWrap)
        .appendChild(postFolder);
    } else {
      bootstrapWrap.firstChild.appendChild(postItem)
        .appendChild(postWrap);
    }

    const postIcon = createElement('span',
      ` post__icon post__icon--${post.postType}`);
    postWrap.appendChild(postIcon);

    return bootstrapWrap;
  }

  // eslint-disable-next-line max-statements
  function createPostInfo() {
    const postInfoWrap = post.postType === 'text'
      ? createElement('div', 'post__info-wrap post__info-wrap--fluid')
      : createElement('div', 'post__info-wrap');
    const postAuthor = createElement('div', `post__author post__author--${post.postType}`);
    const authorName = createElement('span',
      'post__author-name',
      post.authorName);
    const postHeading = createElement('h3',
      'post__heading',
      post.heading);

    const infoBlock = createInfoBlock(post);

    postInfoWrap.appendChild(postAuthor);
    postAuthor.appendChild(authorName);
    postAuthor.appendChild(infoBlock);

    const postText = createElement('p', 'post__text', post.postText);
    const postBtn = createElement('a',
      'btn btn--secondary',
      post.btnText,
      'href', '#');

    postWrap.appendChild(postInfoWrap);

    const textFrags = [postHeading, postText, postBtn];

    appendAll(textFrags, postInfoWrap);

    if (post.postType === 'music') {
      const postAudio = createElement('audio', 'post__audio', null, 'controls', ' ');
      postHeading.after(postAudio);
    }

    return postWrap;
  }
  createPostImageFolder();
  createPostInfo();

  return itemFragment;
}

const createBlogPageHeading = () => {
  const itemFragment = document.createDocumentFragment();

  const blogHeadingBootstrapWrap = makeBootstrapWrap();
  const blogHeading = createManiHeading('main__heading-wrap', 'heading-main heading-main--blog-page', 'Blog');

  itemFragment
    .appendChild(blogHeadingBootstrapWrap).firstChild
    .appendChild(blogHeading);

  return itemFragment;
};

const createBlogPageSearchSection = () => {
  const itemFragment = document.createDocumentFragment();

  const blogSearchBootstrapWrap = makeBootstrapWrap();
  const blogSearchSection = createElement('div', 'search');
  const blogSearchWrap = createElement('div', 'search__wrap');
  const blogSearchInput = createElement('input', 'form__input search__field');

  setMultiAttributes(blogSearchInput, {
    type: 'search',
    placeholder: 'Search by author',
    id: 'formSearch',
  });

  itemFragment
    .appendChild(blogSearchBootstrapWrap).firstChild
    .appendChild(blogSearchSection)
    .appendChild(blogSearchWrap)
    .appendChild(blogSearchInput);

  return itemFragment;
};

const createReadMoreSection = () => {
  const itemFragment = document.createDocumentFragment();
  const [readMoreBootstrap, readMoreWrap, readMoreBtn] = [
    makeBootstrapWrap(),
    createElement('div', 'read-more'),
    createElement('a', 'btn btn--secondary btn--blog-page', 'Read more', 'href', '#'),
  ];

  itemFragment
    .appendChild(readMoreBootstrap).firstChild
    .appendChild(readMoreWrap)
    .appendChild(readMoreBtn);

  return itemFragment;
};

