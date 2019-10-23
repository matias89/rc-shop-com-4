const view = (shop => {
    const testMethod = () => {
        console.log('Testing view!');
        const hw = shop.testMethod(); // M<ethod from 'shop' module
        console.log(hw);
    }
    const showElement = (fatherId, tag, elementId, className, text, type, placeholder, src) => {
        const id = document.getElementById(fatherId);
        const element = shop.createElement(tag, elementId, className, text, type, placeholder, src);
        id.appendChild(element);
    }
    return {
        showElement,
        testMethod
    }
})(shop);

view.testMethod();
view.showElement('main', 'button','btn_1', 'btn btn-secondary m-4', 'Click me', 'button', '', '')
view.showElement('main', 'p','p_1', 'text-success m-4', 'Hello friend...', '', '', '')
view.showElement('main', 'img','img_1', '', '', '', '', 'https://www.gamepals.co/53-large_default/gafas-de-sol-new-balance-livianas-y-resistentes-al-impacto.jpg')

