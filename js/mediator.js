class Mediator {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event, callback) {
    this.subscribers[event] = this.subscribers[event] || [];
    this.subscribers[event].push(callback);
  }
}

const mediator = new Mediator();
const topMenuClass = document.querySelector('.mediator__menu');
const asideMenuClass = document.querySelector('.mediator__menu--aside');

class Menu {
  constructor(menuType, mediator) {
    this.mediator = mediator;
    this.menuType = menuType;
    this.uniqueAuthors = new Set();
  }

  async fetchData() {
    const LIST_OF_POSTS_URL = 'http://localhost:3000/api/articles';
    const response = await fetch(LIST_OF_POSTS_URL);
    const posts = await response.json();
    this.render(posts);
  }

  render(posts) {
    posts.forEach((post) => {
      this.uniqueAuthors.add(post.authorName);
    });

    this.uniqueAuthors.forEach((authorName) => {
      const authorListItem = createElement('li', 'mediator__item');
      const authorLink = createElement('a', 'mediator__link', authorName);

      this.menuType
        .appendChild(authorListItem)
        .appendChild(authorLink);

      const submenuList = createElement('ul', 'mediator__sub-menu mediator__sub-menu--disabled');
      posts.forEach((post) => {
        if (post.authorName === authorName) {
          let postListItem = createElement('li', 'mediator__sub-item');
          let postListItemLink = createElement('a', '', post.heading);
          authorLink
            .appendChild(submenuList)
            .appendChild(postListItem)
            .appendChild(postListItemLink);
        }
      });
    });

    this.menuType.addEventListener('click', (event) => {
      const target = event.target;
      const currentSubmenu = target.querySelector('.mediator__sub-menu');
      const allSubMenus = this.menuType.querySelectorAll('.mediator__sub-menu');

      if (target.className === 'mediator__link') {
        allSubMenus.forEach((subMenu) => {
          subMenu.classList.add('mediator__sub-menu--disabled');
        });

        currentSubmenu.classList.toggle('mediator__sub-menu--disabled');
      }
    });
  }
}

const topMenu = new Menu(topMenuClass, mediator);

const asideMenu = new Menu(asideMenuClass, mediator);
mediator.subscribe('helloWorld', topMenu.fetchData);
mediator.subscribe('helloWorld', asideMenu.fetchData);
topMenu.fetchData();

