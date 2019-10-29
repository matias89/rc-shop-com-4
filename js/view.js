const view = (shop => {
    const testMethod = () => {
        console.log('Testing view!');
        const hw = shop.testMethod(); // Method from 'shop' module
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

    const productDetail = () => {
        const daddy = createElement ('div', 'daddy', 'container', false, false, false,false,false);
        const title = createElement('h4', 'title', 'bold', 'Descripción general',false, false, false, false);
        const description = createElement('p', 'description', false, 'Smart TV. Pantalla 32\" Resolución 1366x768. Contraste 3000:1. Frecuencia de refresco 60Hz. Potencia 10W. HDMI x 2. USB. A/V. Sintonizador Digital TDA. WiFi. Video compuesto. Video por componentes.', false, false, false, false);
        const daddy1 = createElement('div', 'daddy1', 'container', false, false, false,false,false);
        const title1 = createElement('h4', 'title', 'bold', 'Specifications',false, false, false, false);
        const ul = createElement('ul');
        const item = {
            "inches": 75,
            "screenType": "Led",
            "resolution": "4k uhd",
            "weigth": 3.8,
            "Bluetooth": "NO",
            "WiFi": "INTEGRADO",
            "guarantee": "12 MESES"        
        };
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
        const features = document.getElementById('features');
        daddy.appendChild(title);
        daddy.appendChild(description);
        daddy1.appendChild(title1);
        daddy1.appendChild(ul);
        features.appendChild(daddy);
        features.appendChild(daddy1);
        
        
    }  
    
    
    return {
         testMethod,
         runSpinner,
         goPage,
         productDetail
    }

})(shop);

view.testMethod();
view.productDetail();



