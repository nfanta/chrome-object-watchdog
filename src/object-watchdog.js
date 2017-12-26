import $ from './dom-utils';

(function(document) {
  function init() {
    const button = $('#addReference');
    button.on('click', handleButtonClick);
  }

  function handleButtonClick() {
    const input = $('#referenceInput');
    addReferenceToList(input.val());
    input.val('');
  }

  function addReferenceToList(valueString) {
    const list = $('#list');
    let item = createNewItem(valueString);
    list.append(item);
  }

  function createNewItem(valueString) {
    let li = $.new('li', null, [
      $.new('div', null, [
        $.new('h3', null, valueString),
        getCheckboxList(valueString)
      ]),
    ]);

    const removeBtn = $.new('button', {type: 'button'}, 'Remove');
    removeBtn.addEventListener('click', function() {
      li.parentNode.removeChild(li);
    })

    li.appendChild(removeBtn);

    return li;
  }

  function getCheckboxList(valueString) {
    let list = $.new('ul');
    ['get', 'set', 'delete'].reduce(function(list, methodName) {
      let li = $.new('li', null, [
        $.new('label', {for: `${valueString}-${methodName}`}, methodName),
        $.new('input', {type: 'checkbox'})
      ]);
      list.appendChild(li);
      return list;
    }, list);
    return list;
  }

  init();

})(document);
