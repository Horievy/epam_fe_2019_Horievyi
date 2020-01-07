const main = document.querySelector('main');

// Constructor for tags
const makeElement = (tagName, classList, textVal, attrName, attrVal) => {
  const tag = document.createElement(tagName);
  tag.className = classList;

  if (attrName && attrVal) {
    tag.setAttribute(attrName, attrVal);
  }
  if (textVal) {
    const text = document.createTextNode(textVal);
    tag.appendChild(text);
  }

  return tag;
};

// Bootstrap container & row
const makeBootstrapWrap = () => {
  const container = document.createElement('div');
  container.className = 'container';
  const row = document.createElement('div');
  row.className = 'row';
  container.appendChild(row);

  return container;
};

const makeMultiAppending = (array, parentToAppend) =>
  array.forEach((item) => {
    parentToAppend.appendChild(item);
  });

// Create info block
function createInfoBlock(arr, index) {
  const infoBlock = makeElement('div', 'info-block');

  for (key in arr.posts[index].infoBlock) {
    const currentKey = makeElement('span',
      `info-block__item info-block__${key}`,
      arr.posts[index].infoBlock[key]);
    infoBlock.appendChild(currentKey);
  }

  return infoBlock;
}

// Create main heading
function createManiHeading(wrapperClass, headingClasses, headingText) {
  const headingWrapper = makeElement('div', wrapperClass);
  const heading = makeElement('h2', headingClasses, headingText);
  const headingUnderline = makeElement('span', 'heading-main__underline');

  headingWrapper.appendChild(heading)
    .appendChild(headingUnderline);

  return headingWrapper;
}

// Make multi attributes
function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

