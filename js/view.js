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

    const createCardHor = (title, srcImg, price  ) => {
        const newCardH = createElement('div', false, 'card mb-3');
        const newRow = createElement('div', false, 'row no-gutters');
        const newCol1 = createElement('div', false, 'col-md-4');
        const newCol2 = createElement('div', false, 'col-md-8');
        const newImg = createElement('img', false, 'card-img-top', false, false, false, srcImg);
        const newCardBody = createElement('div', false, 'card-body');
        const newTitle = createElement('h5', false, 'card-title', title);
        const newprice = createElement('h3', false, 'card-text', price);
        newCol1.appendChild(newImg);
        newCardBody.appendChild(newTitle);
        newCardBody.appendChild(newprice);
        newCol2.appendChild(newCardBody);
        newRow.appendChild(newCol1);
        newRow.appendChild(newCol2);
        newCardH.appendChild(newRow);        
        return newCardH;       
    }

    const createCard = (title, srcImg, price  ) => {
        const newCard = createElement('div', false, 'card');
        const newImg = createElement('img', false, 'card-img-top', false, false, false, srcImg);
        const newCardBody = createElement('div', false, 'card-body');
        const newTitle = createElement('h5', false, 'card-title', title);
        const newprice = createElement('h3', false, 'card-text', price);
        newCard.appendChild(newImg);
        newCardBody.appendChild(newTitle);
        newCardBody.appendChild(newprice);
        newCard.appendChild(newCardBody);        
        return newCard;         
    }

    const createShop = () => {
        const shop = document.getElementById('shop');
        const card = createCardHor('Prueba', '', '2222');
        shop.appendChild(card);
        
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


