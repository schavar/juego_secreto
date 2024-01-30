let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let rangoMaximo = 10;
let maximosIntentos = 3;


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = (texto);
    return;
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos==1) ? "intento wow!" : " intentos!"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es Menor!!'); 
        } else {
            asignarTextoElemento('p','El numero secreto es Mayor!!'); 
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*rangoMaximo)+1;
    // Si el numero Generado está en la lista hacemos una operación si no, se juega normal

    console.log(numeroGenerado);
    console.log(listaNumeros);
    // Frenar cuando se llene la lista con todos los numeros posibles dentro del rango maximo
    // Si ya sorteamos todos los numeros, pare
    if (listaNumeros.length == maximosIntentos){
        //accion para parar el juego
        asignarTextoElemento('p','Has llegado al Máximo de Intentos');
    } else {
        if (listaNumeros.includes(numeroGenerado)){
            //operación si es verdadero
            return generarNumeroSecreto();
        } else {
            // si el falso se comporta normal pero se agrega el numero generado a la lista:
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego de Adivinanza');
    asignarTextoElemento('p',`Ingrese un numero del 1 al ${rangoMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reinicarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Poner el mensaje de bienvenida y de intevalo de numeros
    //General el numero secreto aleatorio
    // Reinicar el contador de intentos
    condicionesIniciales();
    // Deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();