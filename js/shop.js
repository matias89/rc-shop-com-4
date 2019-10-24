const shop = (() => {
    const testMethod = () => {
        return 'Hello World!';
    }
    const products = [{
        title: 'Leche',
        brand: 'Serenísima',
        id: '1',
        size: '1 litro',
        number: '1'
    },
    {
        title: 'Aceite',
        brand: 'Cocinero',
        id: '2',
        size: '1 litro',
        number: '2'
    }
    ];
    const addProduct = (product, number) => {
        const formatToSave = JSON.stringify(product);
        localStorage.setItem('Products', formatToSave);
    }
    const removeProduct = (product) => {
        localStorage.clear(product);
    }
    const editProduct = (key, newValue) => {
        const info = localStorage.getItem('product');
        const data = JSON.parse(info);
        let a = data.key; 
        localStorage.setItem( 'product', a = newValue )
    }
    return {
        addProduct,
        editProduct,
        testMethod,
        removeProduct,
        products
    }
})();
shop.addProduct(shop.products);
// shop.addProduct(shop.products[1], '2');
setTimeout(() => {
    shop.removeProduct();
    // shop.editProduct(shop.products[0]+'title', 'pan');    
 }, 3000);
