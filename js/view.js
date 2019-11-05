const view = (shop => {

    const runSpinner = (activeSpinner) => {        
        const btnfinish = document.getElementById('endShopButton');
        btnfinish.disabled = true;        
        const spinnerblock = document.getElementById('spinner');
        if (activeSpinner) {
            spinnerblock.className ='spinner-border d-inline-block';            
            const t2 = timer();
            t2.then(numRnd => {              
              view.runSpinner(false);
              const ms = document.getElementById('modal-msg');
              ms.innerText = getMSG(numRnd);
              $('#exampleModal').modal('show')
              btnfinish.disabled = false;
              localStorage.setItem('finishPurchase', numRnd);
            });
        } else {            
            spinnerblock.className ='spinner-border d-none';
        }    
    }

    const timer = () => {       
        const random = new Promise((resolve, reject) => {            
            setTimeout(() => {
                const a = getRnd(0,1);
                resolve(a);
            }, 3000);
        });
        return random;
    }

    const getRnd = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    const getMSG = typeMsg => { 
        let msg;
        if (typeMsg) {
            msg = 'La compra se realizó con Exito.';
        } else {
            msg = 'Se produjo un error. Intente más tarde.';
        }
        return msg;
    }

    const goPage = () => {
        const statusPurchase = localStorage.getItem('finishPurchase');
        if (statusPurchase === '1') {
            location='./index.html';
        }
    } 

    const createElement = (element, id, className, html, type, placeholder, src, display, href, events) => {
        const elm = document.createElement(element);

        if (id) {
            elm.id = id;
        }
        if (className) {
            elm.className = className;
        }
        if (html) {
            elm.innerHTML = html;
        }
        if (type) {
            elm.type = type;
        }
        if (placeholder) {
            elm.placeholder = placeholder;
        }
        if (src) {
            elm.src = src;
        }
        if (display) {
            elm.display = display;
        }
        if (href) {
            elm.href = href;
        }
        if (events && events.length) {
            for (let i = 0; i < events.length; i++) {
                const ev = events[i];
                elm[ev.type] = ev.fn; // elm.onclick = () => { console.log('') }
            }
        }
        return elm
    }

    const productDetail = id => {
        const prodRequest = shop.getProduct(id);        
        prodRequest.then(prod => {
            console.log(prod);
            const addEvent = [{
                type: 'onclick',
                fn: shop.addToCart
                }
            ];
            const carrousel = document.getElementById('detailCarrousel');
           
            for (let i = 0; i < prod.images.length; i++){
                let itemClass = 'carrousel-item';
                if (i === 0) {
                    itemClass = itemClass + ' active';
                }
                const itemCarrousel = createElement ('div', false, itemClass, false, false, false,false,false);
                const itemImg = createElement('img', false, 'd-block w-100', false, false, false, `./images/${prod.images[i].path}`);
                itemCarrousel.appendChild(itemImg);            
                carrousel.appendChild(itemCarrousel);
            }           
            const titledetail = createElement('h1', 'td', 'bold', prod.title)
            const daddy = createElement ('div', 'daddy', 'container border border-danger my-2 p-3', false, false, false,false,false);
            const title = createElement('h4', 'title', 'bold', 'General description',false, false, false, false);
            const description = createElement('p', 'description', false, prod.description, false, false, false, false);
            const button = createElement('button', 'addbutton', 'btn btn-danger', 'Add to Cart', 'submit', false, false, false, false, addEvent);
            const daddy1 = createElement('div', 'daddy1', 'container border border-danger my-2 p-3', false, false, false,false,false);
            const buttonContainer = createElement('div', false, 'container text-right mb-2', false, false, false,false,false);
            const title1 = createElement('h4', 'title', 'bold', 'Specifications',false, false, false, false);
            const ul = createElement('ul',false);
            const li1Content = `<h6 class="d-inline"> Inches: </h6> ${prod.features.inches}`;
            const li2Content = `<h6 class="d-inline"> Screen Type: </h6> ${prod.features.screenType}`;
            const li3Content = `<h6 class="d-inline"> Resolution: </h6> ${prod.features.resolution}`;
            const li4Content = `<h6 class="d-inline"> Weight: </h6> ${prod.features.weigth}`;
            const li5Content = `<h6 class="d-inline"> Bluetooth: </h6> ${prod.features.Bluetooth}`;
            const li6Content = `<h6 class="d-inline"> WiFi: </h6> ${prod.features.WiFi}`;
            const li7Content = `<h6 class="d-inline"> Guarantee: </h6> ${prod.features.guarantee}`;
            const li1 = createElement('li', false, false, li1Content);
            const li2 = createElement('li',false, false, li2Content);
            const li3 = createElement('li',false, false, li3Content);
            const li4 = createElement('li',false, false, li4Content);
            const li5 = createElement('li',false, false, li5Content);
            const li6 = createElement('li',false, false, li6Content);
            const li7 = createElement('li',false, false, li7Content);
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);
            ul.appendChild(li6);
            ul.appendChild(li7);
            const detailtitle = document.getElementById('detailtitle');
            const features = document.getElementById('features');
            daddy.appendChild(title);
            daddy.appendChild(description);
            daddy1.appendChild(title1);
            daddy1.appendChild(ul);
            features.appendChild(daddy);
            detailtitle.appendChild(titledetail);
            features.appendChild(daddy1);
            buttonContainer.appendChild(button);
            features.appendChild(buttonContainer); 
        }); 
    }  
    
    const createCardHor = (title, srcImg, price, description, url) => {
        const link = createElement('a', false, 'linkCard', false, false, false, false, false, url);
        const newCardH = createElement('div', false, 'card my-3 shadowCard');
        const newRow = createElement('div', false, 'row no-gutters');
        const newCol1 = createElement('div', false, 'col-md-4');
        const newCol2 = createElement('div', false, 'col-md-8');
        const newImg = createElement('img', false, 'card-img-top', false, false, false, srcImg);
        const newCardBody = createElement('div', false, 'card-body');
        const newTitle = createElement('h4', false, 'card-title', title);
        const newDescr = createElement('p', false, 'card-text', description);
        const newprice = createElement('h3', false, 'card-text price', price);
        newCol1.appendChild(newImg);
        newCardBody.appendChild(newTitle);
        newCardBody.appendChild(newprice);
        newCardBody.appendChild(newDescr);  
        newCol2.appendChild(newCardBody);
        newRow.appendChild(newCol1);
        newRow.appendChild(newCol2);
        newCardH.appendChild(newRow);        
        link.appendChild(newCardH);      
        return link;              
    }

    const createCard = (title, srcImg, price, description, url) => {
        const link = createElement('a', false, 'linkCard', false, false, false, false, false, url);
        const newCard = createElement('div', false, 'card text-center shadowCard my-2');
        const newImg = createElement('img', false, 'card-img-top', false, false, false, srcImg);
        const newCardBody = createElement('div', false, 'card-body');
        const newTitle = createElement('h4', false, 'card-title', title);
        const newDescr = createElement('p', false, 'card-text', description);
        const newprice = createElement('h3', false, 'card-text price', price);
        newCard.appendChild(newImg);
        newCardBody.appendChild(newTitle);
        newCardBody.appendChild(newDescr);
        newCardBody.appendChild(newprice);
        newCard.appendChild(newCardBody);  
        link.appendChild(newCard);      
        return link;         
    }

    const renderShop = () => {
        const productsRequest = shop.getProducts();
        const shopElement = document.getElementById('shop');
        shopElement.className = 'container';        
        let numCard = 7;
        let numRow = 0;                  
        let row = createElement('div', false, 'row my-2');        
        productsRequest.then(productsShop => {
            for (let i = 0; i < productsShop.length; i++) {
                const prod = productsShop[i];
                let prodImg = '';
                if (prod.images && prod.images.length) {
                    prodImg = prod.images[0].path;
                }
                let col1;
                let card1;
                if (numRow === 0 || numRow%2 === 0) {
                    col1 = createElement('div', false, 'col-sm-6 col-md-3');                
                    card1 = createCard(prod.title, `./images/${prodImg}`, `$ ${prod.price}`, prod.model, `./detail.html#${prod.id}`);    
                } else {
                    col1 = createElement('div', false, 'col-md-4');
                    card1 = createCardHor(prod.title, `./images/${prodImg}`, `$ ${prod.price}`, prod.model, `./detail.html#${prod.id}`);   
                }                
                col1.appendChild(card1);
                row.appendChild(col1);
                if (i === numCard) {                    
                    shopElement.appendChild(row);
                    row = createElement('div', false, 'row my-2');
                    numRow++;
                    if (numRow === 0 || numRow%2 === 0) {
                        numCard = numCard + 8;
                    } else {
                        numCard = numCard + 3;
                    }                    
                }
            }
        });
        shopElement.appendChild(row);                
    
    
        //const col2 = createElement('div', false, 'col-sm-6 col-md-3');
        //const col3 = createElement('div', false, 'col-sm-6 col-md-3');
        //const col4 = createElement('div', false, 'col-sm-6 col-md-3');
        
        //const card2 = createCard('Producto2', './images/products/tv.jpg', '$ 3000', 'Modelo2', './detail.html');
        //const card3 = createCard('Producto3', './images/products/tv.jpg', '$ 4000', 'Modelo3', './detail.html');
        //const card4 = createCard('Producto4', './images/products/tv.jpg', '$ 4000', 'Modelo4', './detail.html');
        
        //col2.appendChild(card2);
        //col3.appendChild(card3);
        //col4.appendChild(card4);
        
        //row.appendChild(col2);
        //row.appendChild(col3);
        //row.appendChild(col4);
       /*    
        const row2 = createElement('div', false, 'row my-2');   
        const colH1 = createElement('div', false, 'col-md-4');
        //const colH2 = createElement('div', false, 'col-md-4');
        //const colH3 = createElement('div', false, 'col-md-4');
        const cardH1 = createCardHor('Producto1', './images/products/tv.jpg', '$ 2000', 'Modelo1', './detail.html');
        //const cardH2 = createCardHor('Producto2', './images/products/tv.jpg', '$ 3000', 'Modelo2', './detail.html');
        //const cardH3 = createCardHor('Producto2', './images/products/tv.jpg', '$ 3000', 'Modelo2', './detail.html');
        colH1.appendChild(cardH1);
        //colH2.appendChild(cardH2);
        //colH3.appendChild(cardH3);
        row2.appendChild(colH1);
        //row2.appendChild(colH2);
        //row2.appendChild(colH3);
        shopElement.appendChild(row2); */
    }
    // Vista en cart.html cuando hay productos cargados en el carrito
    const prodView = () => {
        const addEvent = [{
            type: 'onclick',
            fn: runSpinner
            }
        ];
        const addEvent1 = [{
            type: 'onclick',
            fn: () => {
                location.href= './index.html'
            }
            }
        ];
        const cart_button = document.getElementById('cart_button');
        const containerDiv = createElement('div', 'containerDiv', 'container h-75', false, false, false, false, false, false);
        const alertPrimary = createElement('div', 'alertPrimary', 'alert alert-primary text-center', false, );
        const endShopBtn = createElement('button','endShopButton', 'btn btn-primary mx-4 my-2', '<span>Finalizar compra</span>', false, false, false, false, false, addEvent);
        const contShopBtn = createElement('button', 'contShopBtn', 'btn btn-primary mx-4 my-2', '<span>Seguir comprando</span>', 'button', false, false, false, false, addEvent1);
        alertPrimary.appendChild(endShopBtn);
        alertPrimary.appendChild(contShopBtn);
        
        containerDiv.appendChild(alertPrimary);
        cart_button.appendChild(containerDiv);
    }
    // Vista en cart.html cuando no hay  productos guardados en el carrito
    const noProdView = () => {
        const addEvent1 = [{
            type: 'onclick',
            fn: () => {
                location.href= './index.html'
            }
            }
        ];
        const cart_button = document.getElementById('cart_button');
        const containerDiv = createElement('div', 'containerDiv', 'container h-75', false, false, false, false, false, false);
        const alertDanger = createElement('div', 'alertDanger', 'alert alert-danger text-center');
        const alertTitle = createElement('h1', 'alertTitle', false, 'Alerta!!! No has cargado ningún producto');
        const seeProdBtn = createElement('button', 'seeProdBtn', 'btn btn-primary w-50 align-middle', 'Ver productos', false, false, false, false, false, addEvent1);
        alertDanger.appendChild(alertTitle);
        alertDanger.appendChild(seeProdBtn);
        containerDiv.appendChild(alertDanger);
        cart_button.appendChild(containerDiv);
        
    }
    const renderCartView = () => {
        let productsInCart = shop.getItem('productsInCart');
        if (productsInCart) {
            listProduct(productsInCart);
            prodView();
        } else {
            noProdView();
        }
    }
    const listProduct = (productsInCart) =>{
        const productsRender = document.getElementById('Products-Render');
        for ( let i = 0;i < productsInCart.length; i++ ) {
            const rowProd = createElement('div', false, 'row', false, false) ;
            const colProd1 = createElement('div',false, 'col');
            const colProd2 = createElement('div',false, 'col');
            const colProd3 = createElement('div',false, 'col');
            const colProd4 = createElement('div',false, 'col');
            const colProd5 = createElement('div',false, 'col');
            const colProd6 = createElement('div',false, 'col');
            const colProd7 = createElement('div',false, 'col');
            const btnCart = createElement('button',false,'btn btn-danger','remove')
            const imgProd = createElement('img',false,'h-25',false,false,false,productsInCart[i]);
            const textProd= createElement('p',false,false, productsInCart[i].title,false);
            const inputProd= createElement('input',false,'form-control',false);
            const priceProd = createElement('div',false,false,'$15000');
            colProd5.appendChild(priceProd);
            colProd4.appendChild(inputProd);
            colProd3.appendChild(textProd);
            colProd1.appendChild(btnCart);
            rowProd.appendChild(colProd1);
            colProd2.appendChild(imgProd);
            rowProd.appendChild(colProd2);
            rowProd.appendChild(colProd3);
            rowProd.appendChild(colProd4);
            rowProd.appendChild(colProd5);
            rowProd.appendChild(colProd6);
            rowProd.appendChild(colProd7);
            productsRender.appendChild(rowProd);
        }
    }
    const viewCart = () => {
        
        const rowProd = createElement('div', false, 'row', false, false) ;
        const colProd1 = createElement('div',false, 'col');
        const colProd2 = createElement('div',false, 'col');
        const colProd3 = createElement('div',false, 'col');
        const colProd4 = createElement('div',false, 'col');
        const colProd5 = createElement('div',false, 'col');
        const colProd6 = createElement('div',false, 'col');
        const colProd7 = createElement('div',false, 'col');
        const btnCart = createElement('button',false,'btn btn-danger','remove')
        const imgProd = createElement('img',false,'h-25',false,false,false,'./images/cel55.jpg');
        const textProd= createElement('p',false,false,'celular',false);
        const inputProd= createElement('input',false,'form-control',false);
        const priceProd = createElement('div',false,false,'$15000');
        colProd5.appendChild(priceProd);
        colProd4.appendChild(inputProd);
        colProd3.appendChild(textProd);
        colProd1.appendChild(btnCart);
        rowProd.appendChild(colProd1);
        colProd2.appendChild(imgProd);
        rowProd.appendChild(colProd2);
        rowProd.appendChild(colProd3);
        rowProd.appendChild(colProd4);
        rowProd.appendChild(colProd5);
        rowProd.appendChild(colProd6);
        rowProd.appendChild(colProd7);

        productsRender.appendChild(rowProd);
    }
    return {
         renderCartView,
         runSpinner,
         goPage,
         productDetail,
         renderShop,
         viewCart
    }

})(shop);

//view.productDetail();
// view.renderShop();
//view.viewCart();

