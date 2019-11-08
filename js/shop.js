const shop = (() => {
    const key = 'productsInCart'
    const url = 'http://localhost:3000/products';
    //Adds item to cart
    const addToCart = () => {
        const prodRequest = getProduct(id);
        prodRequest.then(prod => {
            prod.quantity = 1;
            let local = localStorage.getItem(key);
            if (local) {
                var a = [];
                a = JSON.parse(localStorage.getItem(key));
                a.push(prod)
                localStorage.setItem(key, JSON.stringify(a));
            }
            else {
                setItem(key, [prod]);
            }
        })
        timer2();
    };
    // Modifies item quantity on cart and updates localstorage
    const modifyFromCart = (itemId, _quantity) => {
        const inLocalStoreProducts = getItem(key);
        for (let i = 0; i < inLocalStoreProducts.length; i++) {
            if (inLocalStoreProducts[i].id === itemId) {
                inLocalStoreProducts[i].quantity = parseInt(_quantity);
            }
        }
        setItem(key, inLocalStoreProducts);
    }
    // Removes an item from cart
    const removeFromCart = itemId => {
        const inLocalStoreProducts = getItem(key);
        for (let i = 0; i < inLocalStoreProducts.length; i++) {
            if (inLocalStoreProducts[i].id === itemId) {
                console.log(inLocalStoreProducts[i]);
                inLocalStoreProducts.splice(i, 1);
            }
        }
        setItem(key, inLocalStoreProducts);
    }
    // clears items kept in localstorage 
    const doCheckout = () => {
        localStorage.removeItem(key);
    }
    const isItInCart = itemId => {
        const inLocalStoreProducts = getItem(key);
        const flag = false;
        for (let i = 0; i < inLocalStoreProducts.length; i++) {
            if (inLocalStoreProducts[i].id === itemId) return flag = true;
            else return flag;
        }
    }
    //get all products from json file
    const getProducts = () => {
        const requestProducts = fetch(url);
        return requestProducts.then(response => {
            const r = response.json();
            return r.then(products => {
                return products;
            });
        });
    }
    //get the specified item from json file
    const getProduct = id => {
        // console.log(id);
        const requestProducts = fetch(`${url}/${id}`);
        return requestProducts.then(response => {
            const r = response.json();
            return r.then(products => {
                return products;
            });
        });
    }
    const getItem = () => {
        let item = JSON.parse(localStorage.getItem(key));
        return item;
    }
    const setItem = (key, value) => {
        let item = JSON.stringify(value);
        localStorage.setItem(key, item);
    }
    const timer2 = () => {
        const random = new Promise((resolve) => {
            setTimeout(() => {
                resolve(location.href = 'cart.html');
            }, 1000);
        });
        return random;
    }

    return {
        addToCart,
        modifyFromCart,
        getItem,
        removeFromCart,
        doCheckout,
        getProduct,
        getProducts
    }
})();

