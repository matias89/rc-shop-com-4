const shop = (() => {
    const key = 'productsInCart'
    const url = 'http://localhost:3000/products';
    //Funcion para agregar los productos al carrito 
    const addToCart = (item) => {
        // item.quantity = 1; 
        const prod = getItem(key);
        if (prod) {
            prod.push(item);
            setItem(key, prod);
        }
        else {
            setItem(key, [prod]);
        }
    }

    const testFetch = () => {
        const requestProducts = fetch(url);
        requestProducts.then(response => {
            const r =response.json();
            r.then(products => {
                console.log(products);
                 return products
            });
        });
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
    const setItem = (key, value) => {
        let item = JSON.stringify(value);
        localStorage.setItem(key, item);
    }
    return {
        addToCart,
        modifyFromCart,
        getItem,
        removeFromCart,
        doCheckout,
        testFetch
    }
})();

shop.testFetch();
