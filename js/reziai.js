let a = -5;
let b = 0;
let c = -4;
let d = 4;

if(a > b){
    console.log('KLAIDA: A daugiau uz B');
}
if(c > d){
    console.log('KLAIDA: C daugiau uz D');
}
if(b > c && a < d){
    console.log('Duotieji intervalai turi rezi')
}
if(c > a && c < b && b < d){
        console.log('Duotuju intervalu rezis yra [' + c + ';' + b + ']')
}
if(c < a && b < d && b > c){
        console.log('Duotuju intervalu rezis yra [' + a + ';' + b + ']')
}
if(c < a && b > d && a < d){
        console.log('Duotuju intervalu rezis yra [' + a + ';' + d + ']')
}
if(c > a && d < b && a < d ){
    console.log('Duotuju intervalu rezis yra [' + c + ';' + d + ']')
}


