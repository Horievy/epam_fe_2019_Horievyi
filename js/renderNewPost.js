document.addEventListener('DOMContentLoaded', () => {
  // console.log(localStorage.currentPostId);

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
      // console.log(data)
      const currentPost = data[data.length - 1];
      main.appendChild(createPost(currentPost));
      // console.log(currentPost);
    } else {
      // console.log(`${xhr.status} : ${xhr.statusText}`);
    }
  };
});