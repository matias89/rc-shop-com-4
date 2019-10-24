const view = (shop => {
    const testMethod = () => {
        console.log('Testing view!');
        const hw = shop.testMethod(); // M<ethod from 'shop' module
        console.log(hw);
    }
    const createElement = (element, id, className, html, type, placeholder, src, display) => {
        const elm = document.createElement(element);
        if (id) {
            elm.id = id;
        }
        if (className) {
            elm.className = className;
        }
        if (html) {
            elm.innerHTML = html;
        }
        if (type) {
            elm.type = type;
        }
        if (placeholder) {
            elm.placeholder = placeholder;
        }
        if (src) {
            elm.src = src;
        }
        if (display) {
            elm.display = display;
        }
        return elm
    }
    showElement = () => {
        let a = document.getElementById('main');
        let show = createElement('div', 'div_01', 'container', '<span>Hello friend...</span>', false, false, false, 'block')
        a.appendChild(show);
    }
    return {
        showElement,
        testMethod
    }
})(shop);

view.testMethod();
view.showElement();


