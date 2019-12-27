const createElement = (tagName, classList, textVal, attrName, attrVal) => {
  const element = document.createElement(tagName);
  element.className = classList;

  if (attrName && attrVal) {
    element.setAttribute(attrName, attrVal);
  }
  if (textVal) {
    const text = document.createTextNode(textVal);
    element.appendChild(text);
  }

  return element;
};

const makeBootstrapWrap = () => {
  const container = createElement('div', 'container');
  const row = createElement('div', 'row');
  container.appendChild(row);

  return container;
};

const appendAll = (array, parentToAppend) =>
  array.forEach((item) => {
    parentToAppend.appendChild(item);
  });

function createInfoBlock(obj, index) {
  const infoBlock = createElement('div', 'info-block');
  let currentKey;
  if (index !== null) {
    for (const key in obj[index].infoBlock) {
      currentKey = createElement('span',
        `info-block__item info-block__${key}`,
        obj[index].infoBlock[key]);
      infoBlock.appendChild(currentKey);
    }
  }

  for (const key in obj.infoBlock) {
    currentKey = createElement('span',
      `info-block__item info-block__${key}`,
      obj.infoBlock[key]);
    infoBlock.appendChild(currentKey);
  }

  return infoBlock;
}

function createManiHeading(wrapperClass, headingClasses, headingText) {
  const headingWrapper = createElement('div', wrapperClass);
  const heading = createElement('h2', headingClasses, headingText);
  const headingUnderline = createElement('span', 'heading-main__underline');

  headingWrapper
    .appendChild(heading)
    .appendChild(headingUnderline);

  return headingWrapper;
}

function setMultiAttributes(el, attrs) {
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function initialize(parentToAppend, ...fragmentsToAppend) {
  fragmentsToAppend.flat().forEach((fragment) => {
    parentToAppend.appendChild(fragment);
  });
}

