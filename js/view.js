const view = (shop => {
    const testMethod = () => {
        console.log('Testing view!');
        const hw = shop.testMethod(); // M<ethod from 'shop' module
        console.log(hw);
    }
    const createElement = (element, id, className, html, type, placeholder, src, display, href) => {
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
        if (href) {
            elm.href = href;
        }
        return elm
    }
 const show = () => {
     const shower =  document.getElementById('shower');
     const anchor = createElement('a', false, 'text-primary', 'click me', false, false, false, false, 'https://www.google.es');
     shower.appendChild(anchor);
 }
    return {
        testMethod,
        show
    }
})(shop);

view.testMethod();
view.show();

