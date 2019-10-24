const shop = (() => {
    const testMethod = () => {
        return 'Hello World!';
    }
    const product = {
        title: 'Leche',
        id: '1',
        size: '1 litro',
        number: '1'
    };
    const addProduct = () => {
        const formatToSave = JSON.stringify(product);
        localStorage.setItem('Product', formatToSave);
    }
    const removeProduct = (product) => {
        const info = localStorage.clear(product);
    }
    const editProduct = (key, newValue) => {
        const info = localStorage.getItem('product');
        const data = JSON.parse(info);
        data.key = newValue;
        localStorage.setItem( 'product', data.key = newValue )
    }
    return {
        addProduct,
        editProduct,
        testMethod,
        removeProduct
    }
})();
shop.addProduct();
setTimeout(() => {
    shop.removeProduct('product')
    // shop.editProduct('title', 'pan');    
}, 3000);
