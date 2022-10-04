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