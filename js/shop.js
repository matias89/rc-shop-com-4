const shop = (() => {
    //Funcion para agregar los productos al carrito 
    const addToCart = (_id, _title, _price, _quantity) => {
        
        const item = new Object();
            item.id = _id;
            item.title = _title;
            item.price = _price;
            item.quantity = _quantity;
            item.key = _id + _title;
        
        localStorage.setItem(item.key, JSON.stringify(item));
    }
    console.log(addToCart(123, "qwe", 123, 12));
    // Modifica los productos en el carrito
    const modifyFromCart = () => {

        return 'Hello World!';
    }

    // Borra productos en el carrito
    const removeFromCart = () => {

        return 'Hello World!';
    }

    // Verifica el proceso de finalizacion de compra
    const doCheckout = () => {

        return 'Hello World!';
    }
    return {
        addToCart,
        modifyFromCart,
        removeFromCart,
        doCheckout
    }
})();
