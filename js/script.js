var pokusu= 0;

function ukazCas()   {
pokusu=pokusu + 1;
let aktualniCas= new Date();
let hodin = 'Hodin' + aktualniCas.getHours();
let minut= 'Minut' + aktualniCas.getMinutes();
let vterin = 'Vteřin' + aktualniCas.getSeconds();

let spojenycas = hodin + '<br/>' + minut +  '<br/>' + vterin;

document.getElementById('hodiny').innerHTML = spojenycas;
document.getElementById('pokusCislo').innerHTML = pokusu;

document.getElementById('hodiny').classList.toggle('barevne');
}

function ahoj (parametr) {
    alert('programování ahoj' + parametr);}

function dobrý (parametr) {
    alert('facebook.com' + parametr);}
    
var aktualniCas= new Date()
   

alert(aktualniCas.getSeconds());
