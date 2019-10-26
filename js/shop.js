const shop = (() => {
    const testMethod = () => {
        return 'Hello World!';
    }
    const prod = () => {
        let milk = [{
            title: 'Leche',
            Price: '10 pesos',
            id: '1'
        },
        {
            title: 'Aceite',
            Price: '10 pesos',
            id: '1'
        },
        {
            title: 'Azucar',
            Price: '10 pesos',
            id: '1'
        }]
        return milk
    }
    const addProduct = (key, product) => {
        const formatToSave = JSON.stringify(product);
        // console.log('test', formatToSave);
        localStorage.setItem(key, formatToSave);
        // console.log('test2', JSON.parse(formatToSave));
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
        prod,
        addProduct,
        editProduct,
        testMethod,
        removeProduct,
    }
})();

shop.addProduct('Products', shop.prod());
const prod = localStorage.getItem('Products');
const productos = JSON.parse(prod);
productos.push({
    title: 'Mate',
    Price: '10 pesos',
    id: '1'
})
console.log(productos[3])

// shop.addProduct('Sony TV', shop.prod());
// shop.addProduct(shop.products[1], '2');
// setTimeout(() => {
//     shop.removeProduct('Leche');
//     // shop.editProduct(shop.products[0]+'title', 'pan');    
//  }, 3000);
