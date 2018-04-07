// ctrl+s ,tsc(ts) ,node (js) 
// se comenta con ctrl+k+c


//variables
var numero:number=0; 
var string:string="asdasd";
var cualquiertipo:any=22;
let cualquiera:any=33; // mejor usar let mayor alcanse  
//array
var list : any[]=[2,true,2];



function saludar(): void{
    console.log("hola mundo");
} 

function mayor( a: number , b: number): number {
    let guardar: number ;
    if (a>b){
        guardar=a}
        else{
            guardar=b} 
    return guardar;
}

console.log(mayor(2,4));
saludar();
console.log("hola2");
