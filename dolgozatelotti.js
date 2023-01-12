/*function haromszog(a,b,c){
    return a+b+c;
}
console.log(haromszog(3,3,3));

const haromszogKetto = function (a,b,c) {
    return a+b+c;
}
console.log(haromszogKetto(3,3,3));

const haromszogHarom = (a,b,c) =>{
    return a+b+c;
}*/


/*
const asd = vegyes =>{
    if (typeof(vegyes) === String) {
        return vegyes.length();
    }else if (typeof(vegyes) === Number) {
        return vegyes*2;
    }else{
        return "bajvan";
    }
}*/
/*
function fakt(n){
    if (n==0||n==1) {
        return 1;
    }else{
        let eredmeny = n*fakt(n-1);
        return eredmeny;
    }
}
console.log(fakt(5));*//*

function asd(n, z) {
    for(let i = n; i<=z; i++){
        console.log(i);
    }
}
console.log(szamok(10, 20));

const kis= (a,b,callback)=>{
    if (a<b) {
        callback(a,b);
    }
    else{
        callback(b,a);
    }
}
kis(30,20,asd);*/
/*
const asd = a=> {
    for(let i = 1; i<=a.length; i++){
        console.log(a.substring(0, i));
    }
}
asd("asdada");*//*

const szinek = ["piros", "zöld", "sárga", "kék"];

for(let i = 0; i<szinek.length; i++){
    console.log(i);
}

for(const szin of szinek){
    console.log(szin);
}

for (const index in szinek) {
    console.log(index, szinek[index], szinek[index].charAt(0));
}

szinek.forEach(kiir);

function kiir(value) {
    console.log(value);
}

szinek.forEach(kiir2);

function kiir2(value, index) {
    console.log(value, index);
}*/
/*
const szamok = [3,2,5,6,4,8,9];
let osszeg = 0;
szamok.forEach(osszead);

function osszead(szam) {
    osszeg+=szam
}*//*

const kukiati = szamok.map(value => value*2);
console.log(kukiati);

const targonca = szinek.map(value => value.toUpperCase());
console.log(targonca);*/
/*
const cigu = szamok.filter(value => value<5);
console.log(cigu);

const majom = szinek.filter(value => value.length>4);
console.log(majom);
*/
/*
const vegyes = ["alma", 4, 8, "citrom", "banan", 9];
const banan = vegyes.filter(value => typeof(value) == "number");
console.log(banan);*/
/*
const gili = [];
for(let i = 0; i<3;i++){
    gili[i] = [];
    for(let j = 0;j<5;j++){
        szam = Math.floor(Math.random()*10)+10;
        gili[i].push(szam)
    }
}
console.log(gili);*//*

let asd;
let kNev;
let vNev;
let e_mail2;
let emailFo;
let jelszo1;
for(let i = 0; i<3; i++){
    nev = String(prompt("nev: "));
    asd = nev.split(" ");
    vNev = asd[0];
    kNev = asd[1];
    e_mail2 = kNev[0].toLowerCase();
    emailFo = asd[0].toLowerCase()+e_mail2+'@tanulo.hu';
    jelszo1 = vNev[0].toLowerCase()+kNev[0].toLowerCase()+Math.floor(Math.random()*800+100);
    console.log(nev, emailFo, jelszo1);
}*//*

const tomb = ["Kiss Ottó", 22, "Nyíregyháza"];

const tanulo = {
    nev:"Nagy Lajos", 
    kor:22, 
    szulHely:"Nyíregyháza",
    haverok: ["Tibi", "Zoli", "Peti"],
    auto:{
        tipus:"Opel",
        evjarat:210
    },
    szoveg: function () {
        return `${this.nev} születési helye: ${this.szulHely}`
    }
};

console.log(tanulo.auto.tipus);
console.log(tanulo["nev"]);

const uresObj = {};
const ures2 = new Object();
ures2.meret = "ures";
console.log(ures2);

tanulo.nev = "Nagy Zoltán";
tanulo.anyjaNeve = "Nagy Olga";
delete tanulo.anyjaNeve;

for (const key in tanulo) {
    console.log(key, "értéke: ", tanulo[key]);
}

let szamok = "2, 5, -8, 0, -2, 7, -3";
*//*

let tibi = "boci csoki; kinder; chio chips; alma; balaton szelet;";
let anna = "ropi; kinder; chio chips; alma; snickers; mars";
let elso = tibi.split(";"), masodik = anna.split(";");
for(const i of elso){
    if (i in masodik) {
        console.log(i);
    }
}*/
/*
const menetrend = {
    2 : ["5.20", "7.20", "9.20", "11.10", "13.15", "15.20", "17.20", "19.30"],
    5 : ["10.40", "13.40", "17.40"],
    17 : ["9.50", "10.50", "12.50", "15.50", "17.50"]
}
let viszonylat = Number(prompt("Viszonylat:"));
let idopont = Number(prompt("Idopont: "));

for (let i = 0; i < menetrend[viszonylat].length; i++) {
    if (Number(menetrend[viszonylat][i]<idopont)){
        console.log(`A következő busz ${menetrend[viszonylat][i]} időpontban indul`);
    }
}
*/
/*
const termekekAra={
    kenyer: 800,
    zsemle: 95,
    kifli: 90,
    perec: 250,
    kakaós_csiga: 300
}

for(const i in termekekAra){
    console.log(termekekAra[i]*1.2);
}*/
/*
const osztaly_11D={
    Angyal_Anna : [3,4],
    Bak_Kázmér : [5,4,2,2],
    Mekk_Elek :[2,2,5,5],
    Zab_Álmos : [3,3,1,1]
}

for (let i = 0; i < osztaly_11D.length; i++) {
    for (let j = 0; j < osztaly_11D[i].length; j++) {
        console.log(osztaly_11D[i][j]);
    }
}*//*

function koszon() {
    let nev = document.getElementById("username").value;
    let ev = document.getElementById("szulev").value;
    let kiir = document.getElementById("koszones");
    if (2023-ev<18) {
        kiir.innerHTML = "Hello "+nev;
    }else if(2023-ev>18){
        kiir.innerHTML = "Jónapot  "+nev;
    }else{
        kiir.innerHTML = "nemjo";
    }
}*/

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