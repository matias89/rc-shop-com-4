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

    const productDetail = () => {
        const item = {
            "inches": 75,
            "screenType": "Led",
            "resolution": "4k uhd",
            "weigth": 3.8,
            "Bluetooth": "NO",
            "WiFi": "INTEGRADO",
            "guarantee": "12 MESES"        
        };
        const addEvent = [{
            type: 'onclick',
            fn: shop.addToCart
            }
        ];
        const titledetail = createElement('h1', 'td', 'bold', 'TV SMART 4K UHD')
        const daddy = createElement ('div', 'daddy', 'container border border-primary my-2 p-3', false, false, false,false,false);
        const title = createElement('h4', 'title', 'bold', 'General description',false, false, false, false);
        const description = createElement('p', 'description', false, 'Smart TV. Pantalla 32\" Resolución 1366x768. Contraste 3000:1. Frecuencia de refresco 60Hz. Potencia 10W. HDMI x 2. USB. A/V. Sintonizador Digital TDA. WiFi. Video compuesto. Video por componentes.', false, false, false, false);
        const button = createElement('button', 'addbutton', 'btn btn-primary ml-auto float-right', 'Add to Cart', 'submit', false, false, false, false, addEvent);
        const daddy1 = createElement('div', 'daddy1', 'container border border-primary my-2 p-3', false, false, false,false,false);
        const title1 = createElement('h4', 'title', 'bold', 'Specifications',false, false, false, false);
        const ul = createElement('ul',false);
        const li1Content = `<h6 class="d-inline"> Inches: </h6> ${item.inches}`;
        const li2Content = `<h6 class="d-inline"> Screen Type: </h6> ${item.screenType}`;
        const li3Content = `<h6 class="d-inline"> Resolution: </h6> ${item.resolution}`;
        const li4Content = `<h6 class="d-inline"> Weight: </h6> ${item.weigth}`;
        const li5Content = `<h6 class="d-inline"> Bluetooth: </h6> ${item.Bluetooth}`;
        const li6Content = `<h6 class="d-inline"> WiFi: </h6> ${item.WiFi}`;
        const li7Content = `<h6 class="d-inline"> Guarantee: </h6> ${item.guarantee}`;
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
        features.appendChild(button);  
    }  
    
    const createCardHor = (title, srcImg, price, description, url) => {
        const link = createElement('a', false, 'linkCard', false, false, false, false, false, url);
        const newCardH = createElement('div', false, 'card mb-3 shadowCard');
        const newRow = createElement('div', false, 'row no-gutters');
        const newCol1 = createElement('div', false, 'col-md-4');
        const newCol2 = createElement('div', false, 'col-md-8');
        const newImg = createElement('img', false, 'card-img-top', false, false, false, srcImg);
        const newCardBody = createElement('div', false, 'card-body');
        const newTitle = createElement('h4', false, 'card-title', title);
        const newDescr = createElement('p', false, 'card-text', description);
        const newprice = createElement('h5', false, 'card-text', price);
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
        const newCard = createElement('div', false, 'card text-center shadowCard');
        const newImg = createElement('img', false, 'card-img-top', false, false, false, srcImg);
        const newCardBody = createElement('div', false, 'card-body');
        const newTitle = createElement('h4', false, 'card-title', title);
        const newDescr = createElement('p', false, 'card-text', description);
        const newprice = createElement('h3', false, 'card-text', price);
        newCard.appendChild(newImg);
        newCardBody.appendChild(newTitle);
        newCardBody.appendChild(newDescr);
        newCardBody.appendChild(newprice);
        newCard.appendChild(newCardBody);  
        link.appendChild(newCard);      
        return link;         
    }

    const renderShop = () => {
        const shopElement = document.getElementById('shop');
        shopElement.className = 'container';
        const row = createElement('div', false, 'row my-2');
        const col1 = createElement('div', false, 'col-sm-6 col-md-3');
        const col2 = createElement('div', false, 'col-sm-6 col-md-3');
        const col3 = createElement('div', false, 'col-sm-6 col-md-3');
        const col4 = createElement('div', false, 'col-sm-6 col-md-3');
        const card1 = createCard('Producto1', './images/products/tv.jpg', '2000', 'Modelo1', './detail.html');
        const card2 = createCard('Producto2', './images/products/tv.jpg', '3000', 'Modelo2', './detail.html');
        const card3 = createCard('Producto3', './images/products/tv.jpg', '4000', 'Modelo3', './detail.html');
        const card4 = createCard('Producto4', './images/products/tv.jpg', '4000', 'Modelo4', './detail.html');
        col1.appendChild(card1);
        col2.appendChild(card2);
        col3.appendChild(card3);
        col4.appendChild(card4);
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        shopElement.appendChild(row);     
        const row2 = createElement('div', false, 'row my-2');   
        const colH1 = createElement('div', false, 'col-md-4');
        const colH2 = createElement('div', false, 'col-md-4');
        const colH3 = createElement('div', false, 'col-md-4');
        const cardH1 = createCardHor('Producto1', './images/products/tv.jpg', '2000', 'Modelo1', './detail.html');
        const cardH2 = createCardHor('Producto2', './images/products/tv.jpg', '3000', 'Modelo2', './detail.html');
        const cardH3 = createCardHor('Producto2', './images/products/tv.jpg', '3000', 'Modelo2', './detail.html');
        colH1.appendChild(cardH1);
        colH2.appendChild(cardH2);
        colH3.appendChild(cardH3);
        row2.appendChild(colH1);
        row2.appendChild(colH2);
        row2.appendChild(colH3);
        shopElement.appendChild(row2); 
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
        const cart_button = document.getElementById('cart_button');
        const containerDiv = createElement('div', 'containerDiv', 'container h-75', false, false, false, false, false, false);
        const alertDanger = createElement('div', 'alertDanger', 'alert alert-danger text-center');
        const alertTitle = createElement('h1', 'alertTitle', false, 'Alerta!!! No has cargado ningún producto');
        const seeProdBtn = createElement('button', 'seeProdBtn', 'btn btn-primary w-50 align-middle', 'Ver productos', false, false, false, false, false, false);
        alertDanger.appendChild(alertTitle);
        alertDanger.appendChild(seeProdBtn);
        containerDiv.appendChild(alertDanger);
        cart_button.appendChild(containerDiv);
        
    }
    const diff = () => {
        let productsInCart = shop.getItem();
        console.log(productsInCart);
        if (productsInCart) {
            prodView();
        } else {
            noProdView();
        }
    }
    return {
         prodView,
         runSpinner,
         goPage,
         productDetail,
         renderShop
    }

})(shop);

view.productDetail();
// view.renderShop();
// view.noProdView();
// view.prodView();
// view.diff();