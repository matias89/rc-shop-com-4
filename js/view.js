const view = (shop => {
    const testMethod = () => {
        console.log('Testing view!');
        const hw = shop.testMethod(); // M<ethod from 'shop' module
        console.log(hw);
    }

    const runSpinner = (a) => {
        
        const b = document.getElementById('btn-finish');
        b.disabled = true;
        
        const s = document.getElementById('spinner');
        if (a) {
            s.className ='spinner-border d-inline-block';
            
            const t2 = timer();
            t2.then(x => {              
              view.runSpinner(false);
              const ms = document.getElementById('modal-msg');
              ms.innerText = getMSG(x);

              $('#exampleModal').modal('show')
              b.disabled = false;
            });
        } else {            
            s.className ='spinner-border d-none';
        }        
        
    }

    const timer = () => {
       
        const p = new Promise((resolve, reject) => {
            
            setTimeout(() => {
                const a = getRnd(0,1);
                resolve(a);
            }, 3000);
        });
        return p;
    }

    const getRnd = (min, max) => {

        return Math.floor(Math.random() * (max - min + 1) ) + min;

    }

    const getMSG = a =>{
        let msg;
        if ( a ){
            msg = 'La compra se realizó con Exito.';
        } else {
            msg = 'Se produjo un error. Intente más tarde.';
        }

        return msg;
    }


    return {
         testMethod
        ,runSpinner
    }

})(shop);

view.testMethod();

