let kiir = document.getElementById("kiirlepes");
let a = document.getElementById("csuszka");

a.addEventListener("input", ()=>{
    kiir.innerHTML = a.value;
});
