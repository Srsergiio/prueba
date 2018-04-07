// ctrl+s ,tsc(ts) ,node (js) 
// se comenta con ctrl+k+c
//variables
var numero = 0;
var string = "asdasd";
var cualquiertipo = 22;
var cualquiera = 33; // mejor usar let mayor alcanse  
//array
var list = [2, true, 2];
function saludar() {
    console.log("hola mundo");
}
function mayor(a, b) {
    var guardar;
    if (a > b) {
        guardar = a;
    }
    else {
        guardar = b;
    }
    return guardar;
}
console.log(mayor(2, 4));
saludar();
console.log("hola2");
