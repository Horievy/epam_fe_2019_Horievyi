document.addEventListener('DOMContentLoaded', () => {
  const CREATE_ARTICLE_URL = 'http://localhost:3000/api/create-article';

  const data = {
    'heading': 'Fog up the river, where it flows among green aits and meadows',
    'imgLink': 'img/PostMainImg.png',
    'authorName': 'Neil Richards',
    'infoBlock': {
      'date': '02 oct, 2019',
      'read-time': '12 min read',
      'comments': '4',
    },
    'audio': true,
    'paragraphs': [
      {
        'paragraph': 'The thing you’re doing now, reading prose on a screen, is going out of fashion. The defining narrative of our online moment concerns the decline of text, and the exploding reach and power of audio and video. Which come particular teens wasn\'t. Own day designed suspension conflict unlawful. I\'ll stayed liable i\'ve. Interact minutes see night translate.',
      },
      {
        'paragraph': 'Number interact already promotion someone thought run same why one it very. Fifteen problem friend editing away proprietary words shivering shivered. Shivers special worried in waive this we. Spider 13 house same avoid. Coffee including products violation legs my defamatory predominantly important again strictly. Including budgie we materials 17 hand harassing calling offensive relating. Faints comes everyone this developed specialises parties scream. Aren\'t stopped mean little me but what lower problem. Can usually. Middle posts you sometimes can yes that\'s rules breach.',
      },
      {
        'paragraph': 'Same took made faints aged. All Impersonating these. Costs quite full make new. Well see does data friend breach obliged scream no wasn\'t. Saw that\'s methods act. Working approach users what over register. Think the. Perform groups. In unacceptable by should off. About incitement rabbit working temporarily that is against trademark herself might i\'m. Stopped Special stayed supply predominantly plastic in worldwide hypnotised damaging further exercise. Refused reproduce furry publicise week learners really decided text usernames racially happened. Become come glass even see you uncommon eventually relating fifteen.',
      },
      {
        'title': 'Techno Trends',
        'paragraph': 'This methods class of artificial intelligence is on everyone’s lips. And all because it solves problems not directly, but by learning in the process of performing many specific tasks.',
      },
      {
        'paragraph': 'With the help of machine learning, it is possible to increase manyfold the work of websites and applications, so, in the upcoming year such tasks as speech, face and visual images recognition, process of diagnostics and results prediction, analysis and sorting of large data volumes will become even easier.',
        'quote': 'Voice command is really very fast. A person does not need to learn how to navigate the graphical interface and how to use it for an intended purpose. We began to speak almost from birth, and this our skill is very well developed.',
      },
      {
        'title': 'Interface trend',
        'paragraph': 'People have always sought to make things easier, but more effective. Digital area has already grown out a bit from regular graphical navigation, and one of the most affordable alternatives is the voice interface. However, it will replace not all the functions of the UI, but will only become an intermediary between the user and the main function of the site. Why? Here are some of the key arguments.',
      },
    ],
  };

  const xhr = new XMLHttpRequest();

  xhr.open('POST', CREATE_ARTICLE_URL);

  xhr.setRequestHeader('Content-type', 'application/json');

  xhr.send(JSON.stringify(data));

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }
    if (xhr.status !== 200) {
      // console.log (`${xhr.status} : ${xhr.statusText}`);
    }

    if (xhr.status === 200) {
      const postId = data.id;
      localStorage.setItem('currentPostId', postId);
      // window.location.href = './post.html';
    }
  };
});