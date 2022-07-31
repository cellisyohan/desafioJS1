window.onload = function(){
 
    const sacola = [];
    const bot = document.querySelectorAll(".prod");
    const tot = document.querySelector("#TotalCompra"); 
    let valTot =0;
    
    for( let but of bot){
        
        but.addEventListener('click', function(){
            
            if(sacola.indexOf(but.textContent) == -1 ){
            
                sacola.push(but.textContent);
                let lista = ("<li>" +but.textContent+ "</li>" );
                document.getElementById("cestaDoCliente").innerHTML+=lista;
                valTot += Number(but.dataset.preco); 
                tot.value = valTot.toFixed(2); 
            
            } else {
                
                let sac = but.textContent;
                alert(`A fruta  "${sac}"  já esta na sacola!`);
            }
        })  
    }
}