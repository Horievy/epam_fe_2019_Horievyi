
// Create posts on blog page
const createPost = (postType, index) => {
  const videoSection = makeElement('section', `post post--${postType}`);
  const bootstrapWrap = makeBootstrapWrap();
  const fragment = document.createDocumentFragment();

  fragment.appendChild(videoSection)
    .appendChild(bootstrapWrap);

  const postItem = makeElement('div', `post__item post__item--${postType}`);
  const postWrap = makeElement('div', 'post__wrap post__wrap--blog-page');

  if (blog.posts[index].imgLink) {
    const postFolder = makeElement('div', `post__folder post__folder--${postType}`);
    const postImg = makeElement('img',
      `post__image post__image--${postType}`,
      null, 'src',
      blog.posts[index].imgLink);
    postFolder.appendChild(postImg)

    bootstrapWrap.firstChild.appendChild(postItem)
      .appendChild(postWrap)
      .appendChild(postFolder);
  } else {
    bootstrapWrap.firstChild.appendChild(postItem)
      .appendChild(postWrap);
  }

  const postIcon = makeElement('span',
    ` post__icon post__icon--${postType}`);
  postWrap.appendChild(postIcon);

  const postInfoWrap = postType === 'text'
    ? makeElement('div', 'post__info-wrap post__info-wrap--fluid')
    : makeElement('div', 'post__info-wrap');
  const postAuthor = makeElement('div', `post__author post__author--${postType}`);
  const authorName = makeElement('span',
    'post__author-name',
    blog.posts[index].authorName);
  const postHeading = makeElement('h3',
    'post__heading',
    blog.posts[index].heading);

  const infoBlock = createInfoBlock(blog, index);

  postInfoWrap.appendChild(postAuthor);
  postAuthor.appendChild(authorName);
  postAuthor.appendChild(infoBlock);

  const postText = makeElement('p', 'post__text', blog.posts[index].postText);
  const postBtn = makeElement('a',
    'btn btn--secondary',
    blog.posts[index].btnText,
    'href', '#');

  postWrap.appendChild(postInfoWrap);

  const textFrags = [postHeading, postText, postBtn];
  makeMultiAppending(textFrags, postInfoWrap);

  main.appendChild(fragment);
};

const blogTopFragment = document.createDocumentFragment();
// Blog heading
const blogHeadingBootstrapWrap = makeBootstrapWrap();
const blogHeading = createManiHeading('main__heading-wrap', 'heading-main heading-main--blog-page', 'Blog');

// Blog Search
const blogSearchBootstrapWrap = makeBootstrapWrap();
const blogSearchSection = makeElement('div', 'search');
const blogSearchWrap = makeElement('div', 'search__wrap');
const blogSearchInput = makeElement('input', 'form__input search__field');

setAttributes(blogSearchInput, {
  type: 'search',
  placeholder: 'Search by author',
  id: 'formSearch',
});

blogTopFragment.appendChild(blogHeadingBootstrapWrap).firstChild
  .appendChild(blogHeading);

blogTopFragment.appendChild(blogSearchBootstrapWrap).firstChild
  .appendChild(blogSearchSection)
  .appendChild(blogSearchWrap)
  .appendChild(blogSearchInput);

main.appendChild(blogTopFragment);

blog.posts.forEach((post, index) => {
  createPost(post.postType, index);
});

const [readMoreBootstrap, readMoreWrap, readMoreBtn] = [
  makeBootstrapWrap(),
  makeElement('div', 'read-more'),
  makeElement('a', 'btn btn--secondary btn--blog-page', 'Read more', 'href', '#')
];

blogTopFragment
  .appendChild(readMoreBootstrap).firstChild
  .appendChild(readMoreWrap)
  .appendChild(readMoreBtn);

main.appendChild(blogTopFragment);
