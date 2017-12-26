class domElement {
  constructor(element) {
    this.el = element;
    console.log('Holis');
  }

  on(event, handler) {
    this.el.addEventListener(event, handler);
  }

  get() {
    return this.el;
  }

  val(newValue) {
    if (newValue !== undefined) {
      this.el.value = newValue;
    } 
    return this.el.value;
  }

  append(child) {
    this.el.appendChild(child);
  }
}

const $ = function(selector) {
  return new domElement(document.querySelector(selector));
}

$.new = function(tag, props, childs = []) {
  const element = document.createElement(tag);

  if (!props) {
    props = {};
  }
  
  Object.keys(props).reduce(function(el, prop) {
    const value = props[prop];

    if (prop.startsWith('on')) {
      el.addEventListener(prop, value);
    } else {
      el[prop] = value;
    }
    return el;
  }, element);

  if (Array.isArray(childs)) {
    childs.forEach(element.appendChild.bind(element));
  } else {
    element.appendChild(document.createTextNode(childs));
  }

  return element;
}

export default $;