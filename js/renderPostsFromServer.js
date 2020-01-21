/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const LIST_OF_POSTS_URL = 'http://localhost:3000/api/list';

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
    } else {
      // eslint-disable-next-line no-console
      console.log(`${xhr.status} : ${xhr.statusText}`);
    }
  };
});
