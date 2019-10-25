const shop = (() => {
    //Funcion para agregar los productos al carrito 
    const addToCart = (id, title, price, quantity) => {
        
        const item = cartItem(id, title, price, quantity);
        const toLocalStorage = JSON.stringify(item);

        localStorage.setItem(item.key, toLocalStorage);
    }
    
    //asigna el item a una variable para poder utilizarla luego y le asigna una key
    const cartItem = (id, title, price, quantity) => {
        const item = [
            item.id = id,
            item.title = title,
            item.price = price,
            item.quantity = quantity,
            item.key = Math.floor(Math.random() * 9999) + id + title
        ];
            return item;
    }

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