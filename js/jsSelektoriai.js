let fotkes = document.getElementsByTagName('img');
let kiekText = 'Siame puslapyje yra ' + fotkes.length + ' paveiksleliai';

console.log(kiekText);

let uuid= document.getElementById('uuid');
uuid.innerHTML = kiekText;

let fotos = document.querySelectorAll('img:nth-of-type(2n)');
for( let i = 0; i < fotos.length; ++i){
    let elementas = fotos[i]
    elementas.setAttribute("alt", "testas");
}
/*
for(let i = 0; i < fotkes.length; i+=2){
    let elementas = fotkes[i]
    elementas.setAttribute("alt", "testas");
}
 */

// uuid.style.fontSize = '24px';
// uuid.style.backgroundColor = 'green';
// uuid.style.width = '200px';
// uuid.style.height = '200px';

uuid.setAttribute('class', 'uuid');

