alert("¡Bienvenido a la Calculadora de Protogemas!");
pregunta = prompt("¿Listo para calcular tus protos? si/no");

while(pregunta != "si"){
    alert("Tómate tu tiempo.");
    pregunta = prompt("¿Listo para calcular tus protos? si/no");
}

let dias = parseInt(prompt("¿Por cuántos días quieres calcular tus protogemas?"));
let encargos = 60 * dias;

if(dias == ""){
    alert("El campo no debe estar vacío");
}
else{
    alert("encargos" + " = " + encargos + " protogemas");
}

let eventos_pequeños = 420 * dias /7;
if(eventos_pequeños < 420){
    alert("Eventos pequeños" + " = " + "0" + " protogemas");
}
else{
    alert("Eventos pequeños" + " = " + eventos_pequeños + " protogemas");
}

let evento_grande = 1000 * dias /42;
if(evento_grande < 1000){
    alert("Eventos Grandes" + " = " + "0" + " protogemas");
}
else{
    alert("Eventos Grandes" + " = " + evento_grande + " protogemas");
}

let pregunta_bendi = prompt("¿Tienes Bendición Lunar? si/no");

if(pregunta_bendi == "si"){
    let bendicion = dias * 90;
    alert("Bendición Lunar" + " = " + bendicion + " protogemas");
}




let pregunta_pase = prompt("¿Tienes pase de Batalla? si/no");

if(pregunta_pase == "si"){
    let pases = parseInt(prompt("¿Cuántos pases tendrás?"));
    let pase = pases * 1320;
    alert("Pase de Batalla" + " = " + pase + " protogemas");
}

let abismos = parseInt(prompt("¿Cuántos abismos jugarás?"));

if(abismos > 0){
    let estrellas = parseInt(prompt("¿Cuántas estrellas logras obtener por abismo? Elige un número del 1 al 12"));
    let abismo = 50 * abismos * estrellas;
alert("abismo" + " = " + abismo + " protogemas");
}




let pregunta_stream = prompt("¿Verás Streams? si/no");

if(pregunta_pase == "si"){
    let streams = parseInt(prompt("¿Cuántos streams verás?"));
    let stream = streams * 300;
    alert("Streams" + " = " + stream + " protogemas");
}

let pregunta_reset = prompt("¿Habrá Reset de Tienda? si/no");

if(pregunta_reset == "si"){
    let resets = parseInt(prompt("¿Cuántos resets habrá?"));
    let reset = resets * 800;
    alert("Reset Tienda" + " = " + reset + " protogemas");
}

let pregunta_actu = prompt("¿Habrá actualización? si/no");

if(pregunta_actu == "si"){
    let actus = parseInt(prompt("¿Cuántas actualizaciones habrá?"));
    let actu = actus * 600;
    alert("Actualizaciones" + " = " + actu + " protogemas");
}