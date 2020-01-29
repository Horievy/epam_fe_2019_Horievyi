/* eslint-disable no-undef */
const LIST_OF_POSTS_URL = 'http://localhost:3000/api/articles';

const xhr = new XMLHttpRequest();

xhr.open('GET', LIST_OF_POSTS_URL);

xhr.setRequestHeader('Content-type', 'application/json');

xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) {
    return;
  }
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);

    const createdPosts = data.map((post) => {
      switch (post.postType) {
        case 'video':
          return new VideoPost(post).createPost();
        case 'music':
          return new MusicPost(post).createPost();
        case 'image':
          return new ImagePost(post).createPost();
        default:
          return new Post(post).createPost();
      }
    });

    initialize(main,
      createBlogPageHeading(),
      createBlogPageSearchSection(),
      createdPosts,
      createReadMoreSection());

    $('.btn---delete-post').modalBox({height: 300});
    setTimeout(() => {
      $('.body').modalBox({
        type: 'success',
        buttonsAmount: 1,
        height: '200',
        width: '300',
        title: 'Subscribe',
        description: 'Subscribe to this blog and be the first to know about updates',
        autoInvoked: true,
      });
    },2000);
  } else {
    // eslint-disable-next-line no-console
    console.log(`${xhr.status} : ${xhr.statusText}`);
  }
};
