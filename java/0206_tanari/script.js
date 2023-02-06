function Megoldas1(){
    const x = document.getElementById("f1").value;
    let ki = document.getElementById("feladat1");

    if(x=="getData"){
        ki.innerHTML="getData";
        ki.style.backgroundColor="aqua"
    }
    else{
        ki.style.backgroundColor="red"
    }

}


let btn2= document.getElementById("btn2");
btn2.addEventListener("click",Megoldas1);
btn2.addEventListener("mouseover",ramutat);
btn2.addEventListener("mouseout",levesz);

function ramutat(){
    document.getElementById("btn2").style.color="red";
}
function levesz(){
    document.getElementById("btn2").style.color="black";
}


const btn3= document.getElementById("btn3");
btn3.addEventListener("click",()=>{
    if(document.getElementById("igaz").checked){
        document.getElementById("f2kiir").innerHTML="A válaszod rossz";
        document.getElementById("f2kiir").style.color="red"
    }
    else if(document.getElementById("hamis").checked){
        document.getElementById("f2kiir").innerHTML="A válaszod helyes"
        document.getElementById("f2kiir").style.color="green"
    }
})


const btn4 = document.getElementById("btn4");
btn4.addEventListener("click",()=>{
    let valasz = document.getElementById("prog").value;
    if ( valasz == "html"){
        document.getElementById("f3kiir").innerHTML=" A válaszod helyes"
    }
    else if(valasz==""){
        document.getElementById("f3kiir").innerHTML=""
    }
    else{
        document.getElementById("f3kiir").innerHTML="Gondold át újra!"
    }
})






