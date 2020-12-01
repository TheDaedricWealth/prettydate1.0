var desicion11=document.getElementById('11');
var desicion12=document.getElementById('12');
var desicion21=document.getElementById('21');
var desicion22=document.getElementById('22');
var desicion31=document.getElementById('31');
var desicion32=document.getElementById('32');
var desicion41=document.getElementById('41');
var desicion42=document.getElementById('42');
var desicion51=document.getElementById('51');
var desicion52=document.getElementById('52');
var desicion61=document.getElementById('61');
var desicion62=document.getElementById('62');
var desicion71=document.getElementById('71');
var desicion72=document.getElementById('72');
var desicion81=document.getElementById('81');
var desicion82=document.getElementById('82');
var desicion;
var platica1=document.getElementById('platica1');
var platica2=document.getElementById('platica2');
var platica3=document.getElementById('platica3');
var platica4=document.getElementById('platica4');
var platica5=document.getElementById('platica5');
var platica6=document.getElementById('platica6');
var platica7=document.getElementById('platica7');
var platica8=document.getElementById('platica8');
var platica9=document.getElementById('platica9');
var platica10=document.getElementById('platica10');
var platica11=document.getElementById('platica11');
var platica12=document.getElementById('platica12');
var platica13=document.getElementById('platica13');
var platica14=document.getElementById('platica14');
var platica15=document.getElementById('platica15');
var platica16=document.getElementById('platica16');
var platica17=document.getElementById('platica17');
var platica18=document.getElementById('platica18');
var platica19=document.getElementById('platica19');

var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");
var audio5 = document.getElementById("audio5");
audio1.play();


    platica1.addEventListener('click',disable1,true);
    platica2.addEventListener('click',disable2,true);
    platica3.addEventListener('click',disable3,true);
    platica4.addEventListener('click',disable4,true);
    platica5.addEventListener('click',disable5,true);
    platica6.addEventListener('click',disable6,true);
    platica7.addEventListener('click',disable7,true);
    platica8.addEventListener('click',disable8,true);
    platica9.addEventListener('click',disable9,true);
    platica10.addEventListener('click',disable10,true);
    platica11.addEventListener('click',disable11,true);
    platica12.addEventListener('click',disable12,true);
    platica13.addEventListener('click',disable13,true);
    platica14.addEventListener('click',disable14,true);
    platica15.addEventListener('click',disable15,true);
    platica16.addEventListener('click',disable16,true);
    platica17.addEventListener('click',disable17,true);
    platica18.addEventListener('click',disable18,true);
    platica19.addEventListener('click',disable19,true);
    desicion11.addEventListener('click',eleccion11,true);
    desicion12.addEventListener('click',eleccion12,true);
    desicion21.addEventListener('click',eleccion21,true);
    desicion22.addEventListener('click',eleccion22,true);
    desicion31.addEventListener('click',eleccion31,true);
    desicion32.addEventListener('click',eleccion32,true);
    desicion41.addEventListener('click',eleccion41,true);
    desicion42.addEventListener('click',eleccion42,true);
    desicion51.addEventListener('click',eleccion51,true);
    desicion52.addEventListener('click',eleccion52,true);
    desicion61.addEventListener('click',eleccion61,true);
    desicion62.addEventListener('click',eleccion62,true);
    desicion71.addEventListener('click',eleccion71,true);
    desicion72.addEventListener('click',eleccion72,true);
    desicion81.addEventListener('click',eleccion81,true);
    desicion82.addEventListener('click',eleccion82,true);


var puntaje=8;
var vocabulario = ["e1","e2","e3","e4","e5","11","12","21","22","31","32","41","42","51","52","61","62","71","72","81","82"];
var estadoInicial=0;
var estadoFinal=13;
var estadoActual=estadoInicial;
var fin = false;
var contador=0;

var decisiones = ["e1"];

function disable1(){
    
    document.getElementById('imagen1').classList.add('disable');
    document.getElementById('platica1').classList.add('disable');
    document.getElementById('imagen2').classList.remove('disable');
    document.getElementById('platica2').classList.remove('disable');
}
function disable2(){
    document.getElementById('imagen2').classList.add('disable');
    document.getElementById('platica2').classList.add('disable');
    document.getElementById('1').classList.remove('disable');
}
function disable3(){
    document.getElementById('2').classList.remove('disable');
    document.getElementById('platica3').classList.add('disable');
    document.getElementById('imagen3').classList.add('disable');
}
function disable4() {
    document.getElementById('2').classList.remove('disable');
    document.getElementById('platica4').classList.add('disable');
    document.getElementById('imagen4').classList.add('disable');
}
function disable5() {
    document.getElementById('3').classList.remove('disable');
    document.getElementById('platica5').classList.add('disable');
    document.getElementById('imagen5').classList.add('disable');
}
function disable6() {
    document.getElementById('4').classList.remove('disable');
    document.getElementById('platica6').classList.add('disable');
    document.getElementById('imagen6').classList.add('disable');
}
function disable7() {
    document.getElementById('4').classList.remove('disable');
    document.getElementById('platica7').classList.add('disable');
    document.getElementById('imagen7').classList.add('disable');
}
function disable8() {
    audio2.remove();
    audio3.play();
    document.getElementById('escenas').classList.remove('escena2');
    document.getElementById('escenas').classList.add('escena3');
    document.getElementById('platica8').classList.add('disable');
    document.getElementById('imagen8').classList.add('disable');
    document.getElementById('platica10').classList.remove('disable');
    document.getElementById('imagen10').classList.remove('disable');
}
function disable9() {
    audio2.remove();
    audio3.play();
    document.getElementById('escenas').classList.remove('escena2');
    document.getElementById('escenas').classList.add('escena3');
    document.getElementById('platica9').classList.add('disable');
    document.getElementById('imagen9').classList.add('disable');
    document.getElementById('platica10').classList.remove('disable');
    document.getElementById('imagen10').classList.remove('disable');
}
function disable10() {
    
    document.getElementById('platica10').classList.add('disable');
    document.getElementById('imagen10').classList.add('disable');
    document.getElementById('5').classList.remove('disable');
    
}
function disable11() {
    
    document.getElementById('platica11').classList.add('disable');
    document.getElementById('imagen11').classList.add('disable');
    document.getElementById('6').classList.remove('disable');
}
function disable12() {
    
    document.getElementById('platica12').classList.add('disable');
    document.getElementById('imagen12').classList.add('disable');
    document.getElementById('6').classList.remove('disable');
    
}
function disable13() {
    audio3.remove();
    audio4.play();
    document.getElementById('escenas').classList.remove('escena3');
    document.getElementById('escenas').classList.add('escena4');
    document.getElementById('platica13').classList.add('disable');
    document.getElementById('imagen13').classList.add('disable');
    document.getElementById('7').classList.remove('disable');
    
    
}
function disable14() {
    audio3.remove();
    audio4.play();
    document.getElementById('escenas').classList.remove('escena3');
    document.getElementById('escenas').classList.add('escena4');
    document.getElementById('platica14').classList.add('disable');
    document.getElementById('imagen14').classList.add('disable');
    document.getElementById('7').classList.remove('disable');  
}
function disable15() {
    audio4.remove();
    audio5.play();
    document.getElementById('platica15').classList.add('disable');
    document.getElementById('imagen15').classList.add('disable');
    document.getElementById('platica17').classList.remove('disable');  
    document.getElementById('escenas').classList.remove('escena4');
    document.getElementById('escenas').classList.add('escena5');
}
function disable16() {
    audio4.remove();
    audio5.play();
    document.getElementById('platica16').classList.add('disable');
    document.getElementById('imagen16').classList.add('disable');
    document.getElementById('platica17').classList.remove('disable');  
    document.getElementById('escenas').classList.remove('escena4');
    document.getElementById('escenas').classList.add('escena5');
}
function disable17() {
    document.getElementById('platica17').classList.add('disable');
    document.getElementById('8').classList.remove('disable');  
}
function disable18() {
    document.getElementById('platica18').classList.add('disable');
    document.getElementById('imagen18').classList.add('disable');
    document.getElementById('escenas').classList.remove('escena5');
    automata();
}
function disable19() {
    document.getElementById('platica19').classList.add('disable');
    document.getElementById('imagen19').classList.add('disable');
    document.getElementById('escenas').classList.remove('escena5');
    
    automata();
}

function eleccion11(){
    desicion=document.getElementById('11').value;
    decisiones.push(desicion);
    document.getElementById('1').classList.add('disable');
    console.log(desicion);
    document.getElementById('platica3').classList.remove('disable');
    document.getElementById('imagen3').classList.remove('disable');
}
function eleccion12(){
    desicion=document.getElementById('12').value;
    decisiones.push(desicion);
    document.getElementById('1').classList.add('disable');
    console.log(desicion);
    document.getElementById('platica4').classList.remove('disable');
    document.getElementById('imagen4').classList.remove('disable');
}
function eleccion21(){
    desicion=document.getElementById('21').value;
    decisiones.push(desicion);
    document.getElementById('2').classList.add('disable');
    console.log(desicion);
    audio1.remove();
    audio2.play();
    document.getElementById('escenas').classList.remove('escena1');
    document.getElementById('escenas').classList.add('escena2');
    document.getElementById('platica5').classList.remove('disable');
    document.getElementById('imagen5').classList.remove('disable');
}
function eleccion22(){
    desicion=document.getElementById('22').value;
    decisiones.push(desicion);
    document.getElementById('2').classList.add('disable');
    console.log(desicion);
    document.getElementById('escenas').classList.remove('escena1');
    document.getElementById('escenas').classList.add('escena2');
    document.getElementById('platica5').classList.remove('disable');
    document.getElementById('imagen5').classList.remove('disable');
}
function eleccion31(){
    desicion=document.getElementById('31').value;
    decisiones.push('e2',desicion);
    document.getElementById('3').classList.add('disable');
    console.log(desicion);
    document.getElementById('platica6').classList.remove('disable');
    document.getElementById('imagen6').classList.remove('disable');
}
function eleccion32(){
    desicion=document.getElementById('32').value;
    decisiones.push('e2',desicion);
    document.getElementById('3').classList.add('disable');
    console.log(desicion);
    document.getElementById('platica7').classList.remove('disable');
    document.getElementById('imagen7').classList.remove('disable');
}

function eleccion41(){
    desicion=document.getElementById('41').value;
    decisiones.push(desicion);
    document.getElementById('4').classList.add('disable');
    console.log(desicion);
    document.getElementById('platica8').classList.remove('disable');
    document.getElementById('imagen8').classList.remove('disable');
    
}
function eleccion42(){
    desicion=document.getElementById('42').value;
    decisiones.push(desicion);
    document.getElementById('4').classList.add('disable');
    console.log(desicion);
    document.getElementById('platica9').classList.remove('disable');
    document.getElementById('imagen9').classList.remove('disable');
}
function eleccion51(){
    desicion=document.getElementById('51').value;
    decisiones.push('e3',desicion);
    document.getElementById('5').classList.add('disable');
    console.log(desicion);
    document.getElementById('platica11').classList.remove('disable');
    document.getElementById('imagen11').classList.remove('disable');
    
}
function eleccion52(){
    desicion=document.getElementById('52').value;
    decisiones.push('e3',desicion);
    document.getElementById('5').classList.add('disable');
    console.log(desicion);
    document.getElementById('platica12').classList.remove('disable');
    document.getElementById('imagen12').classList.remove('disable');
}
function eleccion61(){
    desicion=document.getElementById('61').value;
    decisiones.push(desicion);
    document.getElementById('6').classList.add('disable');
    console.log(desicion);
    document.getElementById('platica13').classList.remove('disable');
    document.getElementById('imagen13').classList.remove('disable');
}
function eleccion62(){
    desicion=document.getElementById('62').value;
    decisiones.push(desicion);
    document.getElementById('6').classList.add('disable');
    console.log(desicion);
    document.getElementById('platica14').classList.remove('disable');
    document.getElementById('imagen14').classList.remove('disable');
}
function eleccion71(){
    desicion=document.getElementById('71').value;
    decisiones.push('e4',desicion);
    document.getElementById('7').classList.add('disable');
    console.log(desicion);
    document.getElementById('platica15').classList.remove('disable');
    document.getElementById('imagen15').classList.remove('disable');

}
function eleccion72(){
    desicion=document.getElementById('72').value;
    decisiones.push('e4',desicion);
    document.getElementById('7').classList.add('disable');
    console.log(desicion);
    document.getElementById('platica16').classList.remove('disable');
    document.getElementById('imagen16').classList.remove('disable');
}
function eleccion81(){
    desicion=document.getElementById('81').value;
    decisiones.push(desicion,'e5');
    document.getElementById('8').classList.add('disable');
    console.log(desicion);
    console.log(decisiones);
    document.getElementById('platica18').classList.remove('disable');
    document.getElementById('imagen18').classList.remove('disable');
    
}
function eleccion82(){
    desicion=document.getElementById('82').value;
    decisiones.push(desicion,'e5');
    document.getElementById('8').classList.add('disable');
    console.log(desicion);
    console.log(decisiones);
    document.getElementById('platica19').classList.remove('disable');
    document.getElementById('imagen19').classList.remove('disable');
}
function automata(){
    while (!fin) {
        if (contador>12) {
            fin=true;
            break;
        }
    
        if (estadoActual==0){
            if(decisiones[0]==vocabulario[0]){
                estadoActual=1;
            }else{
                contador =12;
            }
            contador++;
        }
    
        if (estadoActual==1) {
          if (decisiones[1]==vocabulario[5]) {
                estadoActual=2;
          }else if(decisiones[1]==vocabulario[6]){
                estadoActual=2;
                puntaje=puntaje-1;
          }else{
              contador=12;
          }
            contador++;
        } 
    
        if (estadoActual==2) {
            if (decisiones[2]==vocabulario[7]) {
                  estadoActual=3;
            }else if(decisiones[2]==vocabulario[8]){
                  estadoActual=3;
                  puntaje=puntaje-1;
            }else{
                contador=12;
            }
              contador++;
          } 
          
          if (estadoActual==3){
            if(decisiones[3]==vocabulario[1]){
                estadoActual=4;
            }else{
                contador =12;
            }
            contador++;
        }
         
        if (estadoActual==4) {
            if (decisiones[4]==vocabulario[9]) {
                  estadoActual=5;
            }else if(decisiones[4]==vocabulario[10]){
                  estadoActual=5;
                  puntaje=puntaje-1;
            }else{
                contador=12;
            }
              contador++;
          } 
    
          if (estadoActual==5) {
            if (decisiones[5]==vocabulario[11]) {
                  estadoActual=6;
            }else if(decisiones[5]==vocabulario[12]){
                  estadoActual=6;
                  puntaje=puntaje-1;
            }else{
                contador=12;
            }
              contador++;
          }
    
          if (estadoActual==6){
            if(decisiones[6]==vocabulario[2]){
                estadoActual=7;
            }else{
                contador =12;
            }
            contador++;
        }
    
        if (estadoActual==7) {
            if (decisiones[7]==vocabulario[13]) {
                  estadoActual=8;
            }else if(decisiones[7]==vocabulario[14]){
                  estadoActual=8;
                  puntaje=puntaje-1;
            }else{
                contador=12;
            }
              contador++;
          }
    
          if (estadoActual==8) {
            if (decisiones[8]==vocabulario[15]) {
                  estadoActual=9;
            }else if(decisiones[8]==vocabulario[16]){
                  estadoActual=9;
                  puntaje=puntaje-1;
            }else{
                contador=12;
            }
              contador++;
          }
    
          if (estadoActual==9){
            if(decisiones[9]==vocabulario[3]){
                estadoActual=10;
            }else{
                contador =12;
            }
            contador++;
        }
    
        if (estadoActual==10) {
            if (decisiones[10]==vocabulario[17]) {
                  estadoActual=11;
            }else if(decisiones[10]==vocabulario[18]){
                  estadoActual=11;
                  puntaje=puntaje-1;
            }else{
                contador=12;
            }
              contador++;
          }
    
          if (estadoActual==11) {
            if (decisiones[11]==vocabulario[19]) {
                  estadoActual=12;
            }else if(decisiones[11]==vocabulario[20]){
                  estadoActual=12;
                  puntaje=puntaje-1;
            }else{
                contador=12;
            }
              contador++;
          }
    
          if (estadoActual==12){
            if(decisiones[12]==vocabulario[4]){
                estadoActual=13;
            }else{
                contador =12;
            }
            contador++;
        }
    }
    if (estadoActual==estadoFinal) {
        alert("Felicidades finalizaste el juego");
        document.getElementById('escenas').classList.add('fin');
        if (puntaje>4) {
            alert("La cita fue todo un exito");
        }else{
            alert("Bueno creo que no te volvera a hablar");
        }
        
    } else {
        alert("Error en la finalizacion, revisar codigo y corregir");
    }
}