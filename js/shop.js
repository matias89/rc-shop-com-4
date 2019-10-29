const shop = (() => {
    const key = 'productsInCart'
    //Funcion para agregar los productos al carrito 
    const addToCart = (item) => {
        item.quantity = 1;
        const prod = getItem(key);
        if (prod) {
            prod.push(item);
            setItem(key, prod);
        }
        else {
            setItem(key, [prod]);
        }
    }
    // Modifica los productos en el carrito
    const modifyFromCart = (item, _quantity) => {
        const inLocalStoreProducts = getItem(key);
        for (let i = 0; i < inLocalStoreProducts.lenght; i++) {
            if (inLocalStoreProducts[i].id === item.id) {
                inLocalStoreProducts[i].quantity = _quantity;
            }
        }
        setItem(key, LCproduct);
    }
    // Borra productos en el carrito
    const removeFromCart = (item) => {
        const inLocalStoreProducts = getItem(key);
        for (let i = 0; i < LCproduct.lenght; i++) {
            if (inLocalStoreProducts[i].id === item.id) {
                inLocalStoreProducts[i].splice(i, 1);
            }
        }
        setItem(key, LCproduct);
    }
    // Verifica el proceso de finalizacion de compra
    const doCheckout = () => {
        const products = getItem(key)
        return products;
    }
    const getItem = (key) => {
        let item = JSON.parse(localStorage.getItem(key));
        return item;
    }
    const setItem = (itemFromLocalStorage) => {
        let item = JSON.stringify(itemFromLocalStorage);
        localStorage.setItem(key, item);
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
        addToCart,
        modifyFromCart,
        removeFromCart,
        doCheckout
    }
})();
