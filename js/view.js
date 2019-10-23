const view = (shop => {
    const testMethod = () => {
        console.log('Testing view!');
        const hw = shop.testMethod(); // M<ethod from 'shop' module
        console.log(hw);
    }
    const createElement = (element, id, className, text, type, placeholder, src) => {
        const elm = document.createElement(element);
        elm.id = id;
        elm.className = className;
        elm.innerText = text;
        elm.type = type;
        elm.placeholder = placeholder
        elm.src = src;
        return elm
    }
    const showElement = (elementId) => {
        const id = document.getElementById(elementId);
        const element1 = createElement('div', 'boxdiv', 'container')
        const element = createElement('input','input_1', 'form-control', '', 'date', '', '');
        element1.appendChild(element)
        id.appendChild(element1);

    }
    return {
        showElement,
        testMethod
    }
})(shop);

view.testMethod();
view.showElement('main')

