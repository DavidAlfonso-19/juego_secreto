let numeroSecreto = 0; 
let contador = 0;
let intentos = 3;
let list = [];

// Iniciar los valores del juego
condicionesIniciales();

// ------------ Logica del juego ------------

//Boton iniciar
function iniciar(){
    // Extraer el número
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    console.log(`Usuario: ${numeroUsuario}`);
    console.log(`Contador: ${contador}`);
    // Si el jugador acierta
    if (numeroSecreto == numeroUsuario){
        asignarTexto('p', `Acertaste el número en ${contador} ${(contador == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        // Si el jugador no acierta se dan pistas
        if (numeroUsuario > numeroSecreto){
            asignarTexto('p', 'El número secreto es menor');
        }
        else {
            asignarTexto('p', 'El número secreto es mayor');
        }

        // Aumentar el contador de intentos
        if (!isNaN(numeroUsuario)){
            contador++;
        }
        
        // Limpiar caja de texto
        limpiarCaja();

        // Asignar limite de intentos
        if (contador > intentos){
            alert(`Alcanzaste el limite de intentos. El número secreto era: ${numeroSecreto}`);
            condicionesIniciales();
        }
    }
}

// Botón reiniciar
function reiniciarJuego(){
    // Se limpia la caja de texto
    limpiarCaja();
    // Se crea un nuevo numero secreto y se reinicia el contador de intentos
    condicionesIniciales();
    // desactivar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}


// ------------ Funciones secundarias ------------
function condicionesIniciales(){
    // Reiniciar textos
    asignarTexto('h1', 'Juego del número secreto');
    asignarTexto('p', 'Indica un número del 1 al 10');
    // Generar número secreto
    numeroSecreto = generarNumeroAleatorio(); 
    // Reiniciar contador
    contador = 1   

}

function asignarTexto(elemento, texto){
    // Extraer elemento
    let elementoHTML = document.querySelector(elemento);
    // Insertar texto
    elementoHTML.innerHTML = texto;
}

function generarNumeroAleatorio(numeroMaximo = 10){
    let numeroMayor = numeroMaximo

    console.log(list);

    // Verificar que la lista de números no este llena
    if (list.length == numeroMayor){
        list = [];
    }
    
    // Generar número random
    let numeroAleatorio = Math.floor(Math.random() * numeroMayor)+1;
    console.log(numeroAleatorio);
    
    // Si el numero aleatorio ya fue generado aplicamos recursividad
    if (list.includes(numeroAleatorio)){
        return generarNumeroAleatorio()
    }
    else {
        // sino está, lo agregamos a la lista y lo retornamos
        list.push(numeroAleatorio);
        return numeroAleatorio;
    }    
}

function limpiarCaja(){
    // Reemplazar texto en el input
    return document.getElementById('numeroUsuario').value = '';
}