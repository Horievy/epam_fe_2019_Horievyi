/* eslint-disable no-undef */
$.fn.modalBox = function (prop) {
  const options = $.extend({
    type: 'success',
    buttonsAmount: 2,
    height: '200',
    width: '300',
    title: 'Delete post',
    description: 'Are you sure you want to delete this post?',
    autoInvoked: false,
  },prop);
  if (options.autoInvoked) {
    addBlockPage();
    addOverlay();
    addPopupBox();
    addStyles();
    closePopupBox();
  }

  this.click(() => {
    addBlockPage();
    addOverlay();
    addPopupBox();
    addStyles();
    closePopupBox();
  });

  function addStyles() {
    $('.modal-box').css({
      'position': 'fixed',
      'left': '50%',
      'top': '50%',
      'transform': 'translate(-50%, -50%)',
      'height': `${options.height}px`,
      'width': `${options.width}px`,
      'border': `4px solid ${options.type === 'success' ? 'green' : 'red'}`,
      'padding': '30px 20px',
      'background': '#f2f2f2',
      'z-index': '50',
    });
    $('.modal-close-icon').css({
      'position': 'absolute',
      'top': '-25px',
      'right': '-25px',
      'display': 'block',
      'height': '50px',
      'width': '50px',
      'background': 'url(http://cdn131.picsart.com/306515425310211.png) no-repeat',
      'background-size': 'contain',
    });
    $('.block-page').css({
      'position': 'relative',
    });
    $('.box-overlay').css({
      'position': 'fixed',
      'background-color': 'rgba(0,0,0,0.5)',
      'top': '10',
      'bottom': '10',
      'left': '10',
      'right': '10',
    });
  }

  function addBlockPage() {
    const blockPage = $('<div class="block-page"></div>');

    $(blockPage).appendTo('body');
  }
  function addOverlay() {
    const overlay = $('<div class="box-overlay  modal-close" style="position: fixed; z-index: 10; background-color: red; top: 0; bottom: 0; left: 0;right: 0; display: block;"></div>');

    $(overlay).appendTo('.block-page');
  }

  function addPopupBox() {
    const popupButton = options.buttonsAmount === 1
      ? $('<button class="modal_button btn btn--secondary modal-close">Ok</button>')
      : $('<button class="modal_button btn btn--secondary modal-close">Ok</button> <button class="modal_button btn btn--secondary modal-close">Close</button>}');
    const popUp = $(`<div class="modal-box"><a href="#" class="modal-close-icon modal-close"></a><h2> ${options.title}</h2><p> ${options.description} </p></div>`);
    $(popUp).appendTo('.block-page');
    $(popupButton).appendTo('.modal-box');
  }

  function closePopupBox() {
    $('.modal-close').click(() => $('.block-page').remove());
    $('body').keydown((e) => {
      if (e.which === 27) {
        $('.block-page').remove();
      }
    });
  }
};
