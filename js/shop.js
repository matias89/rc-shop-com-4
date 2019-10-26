const shop = (() => {
    const key = 'productsInCart'
    //Funcion para agregar los productos al carrito 
    const addToCart = (prod) => {
        prod.quantity = 1;
        if (prod) {
            const products = getItem(key);
            products.push(prod);
            setItem(key, item);
        }
        else {
            setItem(key, [prod]);
        }
    }
    // Modifica los productos en el carrito
    const modifyFromCart = (products, _quantity) => {
        const inLCproduct = getItem(key);
        for (let i = 0; i < LCproduct.lenght; i++) {
            if (inLCproduct[i].id === products.id) {
                inLCproduct[i].quantity = _quantity;
            }
        }
        setItem(key, LCproduct);
    }
    // Borra productos en el carrito
    const removeFromCart = () => {
        const inLCproduct = getItem(key);
        for (let i = 0; i < LCproduct.lenght; i++) {
            if (inLCproduct[i].id === products.id) {
                inLCproduct[i].splice(i, 1);
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
    const setItem = (itemFromLC) => {
        let item = JSON.stringify(itemFromLC);
        localStorage.setItem(key, item);
    }
    return {
        addToCart,
        modifyFromCart,
        removeFromCart,
        doCheckout
    }
})();
