/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const CREATE_ARTICLE_URL = 'http://localhost:3000/api/create-article';
  const date = new Date();
  const monthNames = ['January', 'February', 'March', 'April', 'May','June','July', 'August', 'September', 'October', 'November', 'December'];

  createPostForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!validate(postTitle.value)) {
      postTitle.style.borderColor = 'red';
      postTitle.previousElementSibling.style.display = 'block';
      return;
    }
    const formData = {
      'postType': postType.value,
      'heading': postTitle.value,
      'imgLink': postImage.value,
      'authorName': postAuthor.value,
      'paragraphs': [
        {
          'paragraph': postDescription.value,
          'quote': postQuote.value,
        },
      ],
      'infoBlock': {
        'date': `${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`,
        'read-time': '12 min read',
        'comments': '4',
      },
      btnText: 'Read more',
      postText: postDescription.value,
    };
    if (formData.postType === 'music') {
      formData.audio = true;
    }

    const xhr = new XMLHttpRequest();

    xhr.open('POST', CREATE_ARTICLE_URL);

    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.send(JSON.stringify(formData));

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status !== 200) {
        // eslint-disable-next-line no-console
        console.log (`${xhr.status} : ${xhr.statusText}`);
      }

      if (xhr.status === 200) {
        const request = JSON.parse(xhr.responseText);
        const currentPostId = request[request.length - 1].id;

        localStorage.setItem('currentPostId', currentPostId);
        window.location.href = './post.html';
      }
    };
  });
});