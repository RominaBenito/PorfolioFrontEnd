let numero = document.getElementById("numero");
let counter= 0;
setInterval(() => {
    if(counter ==90) {
        clearInterval();
    } else{
        counter+=1;
        Number.innerHTML= counter + "%";
    }    
}, 30);

let numeroCss = document.getElementById("numeroCss");
let counter= 0;
setInterval(() => {
    if(counter ==70) {
        clearInterval();
    } else{
        counter+=1;
        Number.innerHTML= counter + "%";
    }    
}, 30);

let numeroJs = document.getElementById("numerojs");
let counter= 0;
setInterval(() => {
    if(counter ==70) {
        clearInterval();
    } else{
        counter+=1;
        Number.innerHTML= counter + "%";
    }    
}, 30);

let numeroBootstrap = document.getElementById("numeroBootstrap");
let counter= 0;
setInterval(() => {
    if(counter ==50) {
        clearInterval();
    } else{
        counter+=1;
        Number.innerHTML= counter + "%";
    }    
}, 30);