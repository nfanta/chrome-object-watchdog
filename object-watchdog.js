(function(document) {
    document.addEventListener('DOMContentLoaded', function () {
        init();
    })
    
    function init() {
        const button = document.getElementById('addReference');
        button.addEventListener('click', handleButtonClick);
    }

    function handleButtonClick() {
        const input = document.getElementById('referenceInput');
        addReferenceToList(input.value);
        input.value = '';
    }

    function addReferenceToList(valueString) {
        const list = document.getElementById('list');
        let item = createNewItem(valueString);
        list.appendChild(item);
    }

    function createNewItem(valueString) {
        let li = document.createElement('li');
        let container = document.createElement('div');
        let title = document.createElement('h3');
        let checkboxes = getCheckboxList(valueString);
        title.innerHTML = valueString;
        container.appendChild(title);
        container.appendChild(checkboxes);
        li.appendChild(container);
        return li;
    }

    function getCheckboxList(valueString) {
        let list = document.createElement('ul');
        ['get', 'set', 'delete'].reduce(function(list, methodName) {
            let li = document.createElement('li');
            let label = document.createElement('label');
            label.innerHTML = methodName;
            label.for = `${valueString}-${methodName}`;
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            li.appendChild(checkbox);
            li.appendChild(label);
            list.appendChild(li);
            return list;
        }, list);
        return list;
    }

})(document);
