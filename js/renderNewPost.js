/* eslint-disable no-undef */
import {createPost} from './postPage.js';
document.addEventListener('DOMContentLoaded', () => {
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
      const currentPostId = localStorage.getItem('currentPostId');
      if (data.some((item) => item.id)) {
        createPost(data.find((elem) => {
          return elem.id === +currentPostId;
        }));

        const postsOnPage = document.querySelectorAll('.post--pages');

        postsOnPage[0].before(postsOnPage[1]);
        postsOnPage[0].remove();
      }
    } else {
      // eslint-disable-next-line no-console
      console.log(`${xhr.status} : ${xhr.statusText}`);
    }
  };
});
