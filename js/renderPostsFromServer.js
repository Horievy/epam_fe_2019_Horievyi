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

      class Post {
        constructor(posts) {
          this.posts = posts;
        }

        createPost = function () {
          const post = this.posts.map((post) => {
            return createPost(post);
          });
          return post;
        }
      }

      const newPost = new Post(data);

      initialize(main,
        createBlogPageHeading(),
        createBlogPageSearchSection(),
        newPost.createPost(),
        createReadMoreSection());
    } else {
      // eslint-disable-next-line no-console
      console.log(`${xhr.status} : ${xhr.statusText}`);
    }
  };
});
