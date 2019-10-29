const shop = (() => {
    const key = 'productsInCart'
    //Funcion para agregar los productos al carrito 
    const addToCart = (item) => {
        prod.quantity = 1;
        if (item) {
            const prod = getItem(key);
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
    return {
        addToCart,
        modifyFromCart,
        removeFromCart,
        doCheckout
    }
})();
