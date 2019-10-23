const shop = (() => {
    const testMethod = () => {
        return 'Hello World!';
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
    return {
        createElement,
        testMethod
    }
})();