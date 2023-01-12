//**1**
let nevek=["Kati", "Peti", "Zoli", "Joli"];
let van = false;
nevek.forEach(element => {
    if (element=="Sanyi") {
        van=true;
    }
});

if (van==false) {
    nevek.unshift("Sanyi");
}

nevek.forEach(element => {
    console.log(element);
});
//**2,3**
let szamok=[3,6,10,88,32];
let szamok2 = [];
let kicsi = [];
let nagy = [];

szamok.forEach(element => {
    szamok2.push(element*2);
    if (element*2>=100) {
        nagy.push(element*2)
    }else{
        kicsi.push(element*2)
    }
});

szamok2.forEach(element => {
    console.log(element);
});
console.log(kicsi);
console.log(nagy);

//**4**

let str="5,1,8,-4,0,-5,6,10,-1";

const asd = {
    pozitiv: [],
    negativ: [],
    nulla: []
};

let szam = str.split(",");

szam.forEach(element => {
    if (element==0) {
        asd.nulla.push(element)
    }else if (element>0) {
        asd.pozitiv.push(element)
    }else{
        asd.negativ.push(element)
    }
});

console.log(asd.pozitiv);
console.log(asd.negativ);
console.log(asd.nulla);