const view = (shop => {
    const testMethod = () => {
        console.log('Testing view!');
        const hw = shop.testMethod(); // M<ethod from 'shop' module
        console.log(hw);
    }

    const runSpinner = (activeSpinner) => {        
        const btnfinish = document.getElementById('btn-finish');
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

    const getMSG = typeMsg =>{
        let msg;
        if (typeMsg) {
            msg = 'La compra se realizó con Exito.';
        } else {
            msg = 'Se produjo un error. Intente más tarde.';
        }
        return msg;
    }

    const goPage = () =>{
        const statusPurchase = localStorage.getItem('finishPurchase');
        if (statusPurchase === '1') {
            window.location="./index.html";
        }
    } 

    const createElement = (element, id, className, html, type, placeholder, src, display) => {
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
        return elm
    }

    const createCardHor = (title, srcImg, price, description) => {
        const newCardH = createElement('div', false, 'card mb-3');
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
        return newCardH;       
    }

    const createCard = (title, srcImg, price, description) => {
        const newCard = createElement('div', false, 'card text-center');
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
        return newCard;         
    }

    const createShop = () => {
        const shop = document.getElementById('shop');
        shop.className = 'container';
        const row = createElement('div', false, 'row my-2');
        const col1 = createElement('div', false, 'col-md-3');
        const col2 = createElement('div', false, 'col-md-3');
        const col3 = createElement('div', false, 'col-md-3');
        const col4 = createElement('div', false, 'col-md-3');
        const card1 = createCard('Producto1', './img/tv.jpg', '2000', 'Modelo1');
        const card2 = createCard('Producto2', './img/tv.jpg', '3000', 'Modelo2');
        const card3 = createCard('Producto3', './img/tv.jpg', '4000', 'Modelo3');
        const card4 = createCard('Producto4', './img/tv.jpg', '4000', 'Modelo4');
        col1.appendChild(card1);
        col2.appendChild(card2);
        col3.appendChild(card3);
        col4.appendChild(card4);
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        row.appendChild(col4);
        shop.appendChild(row);     
        const row2 = createElement('div', false, 'row my-2');   
        const colH1 = createElement('div', false, 'col-md-4');
        const colH2 = createElement('div', false, 'col-md-4');
        const colH3 = createElement('div', false, 'col-md-4');
        const cardH1 = createCardHor('Producto1', './img/tv.jpg', '2000', 'Modelo1');
        const cardH2 = createCardHor('Producto2', './img/tv.jpg', '3000', 'Modelo2');
        const cardH3 = createCardHor('Producto2', './img/tv.jpg', '3000', 'Modelo2');
        colH1.appendChild(cardH1);
        colH2.appendChild(cardH2);
        colH3.appendChild(cardH3);
        row2.appendChild(colH1);
        row2.appendChild(colH2);
        row2.appendChild(colH3);
        shop.appendChild(row2); 
    }

    return {
         testMethod
        ,runSpinner
        ,goPage
        ,createShop
    }

})(shop);

view.testMethod();
view.createShop();


