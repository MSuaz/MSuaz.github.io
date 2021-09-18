function readyFn( ) {
    // Este código es lanzado por el elemento <body onload="readyFn()">
    epprSignature()
    // Definimos 2 constantes al seleccionar elementos por Id.
    const entrada  = document.getElementById("input");
    const selector = document.getElementById("select");

    // Creamos un "Listener" para escuchar eventos en el elemento selector en este ejemplo, el evento es "change".
    selector.addEventListener("change", (event) => {
        // Imprimir en la consola de nuestro navegador el valor del elemento seleccionado.
        console.log(event.target.value)
    })

    // Creamos un "Listener" para escuchar eventos en nuestra página, en este ejemplo, el evento es "click".
    document.getElementById("submit").addEventListener("click", () => {
        // Aquí es donde vamos a realizar todas nuestras actividades.
        var algoritmo = selector.value // Actualizar el valor más reciente de la constante "selector".
        var texto = entrada.value // Actualizar el valor de la constante "entrada", por si ha cambiado recientemente.
        texto = texto.toString() // Este paso convierte cualquier valor en una cadena de texto (String variable)
        // ACTIVIDADES (Algoritmos):
        if ( algoritmo == "1" ) {
         // 1) Todo el texto en Mayúsculas. // .toUpperCase()
        texto == texto.toUpperCase()
        }
        if ( algoritmo == "2" ) {
         // 2) Todo el texto en Minúsculas. // .toLowerCase()
        texto == texto.toLowerCase()
        }
        if ( algoritmo == "3" ) {
         // 3) Detectar si el texto es un número o no. // isNaN(x)
        texto = ( isNaN(texto) ) ? "No es un numero" : "Numero valido" ;
        }
        if ( algoritmo == "4" ) {
         // 4) Solo aceptar números. // .replace(/\D/g,'') // RegEx \D
        texto = texto.replace(/\D/g,'')
        }
        if ( algoritmo == "5" ) {
         // 5) Determinar si un número es par o impar. // Operador Resto (x % 2)
         var par = ( texto % 2 !==1) ? "Par" : "Impar" ;
        }
        if ( algoritmo == "6" ) {
         // Dado un nombre completo, mostrar el apellido primero.
         // El objetivo de este algoritmo es dando el nombre completo, poner primero el apellido y despues el nombre.
         // 1.(Leer la variable de entrada "texto")
         // 2.(Separar el texto por los espacios en blanco la variable de entrada)
         // 3.(Ordenar el resultado por index'1,0')          
            const swappy = texto.split(" ")
           texto = `${swappy[1]} , ${swappy[0]}`
        }
        if ( algoritmo == "7" ) {
         // Si el texto no incluye la palabra "EPPR" mostrar un mensaje de error.
          texto = `El texto $(texto.includes("EPPR") ? 'Si' : 'No' contiene EPPR`       
        }
        if ( algoritmo == "x" ) {
         // Dado un número, confirmar si tiene 10 dígitos o no.
        }


        myFunction(texto)
    })

}

// Función predeterminada que nos ayuda a imprimir en consola y además a modificar el resultado.
function myFunction( texto ) {
    // Seleccionar Elemento con clase "resultado"
    const resultado = document.querySelector('.resultado');
    // Modificar el contenido del elemento seleccionado.
    resultado.textContent = `${texto}`;
    // Imprimir en la consola de nuestro navegador.
    console.log(texto)
}

// Ejemplo de una función nueva
function newFunction( input ) {
    // El nombre de esta funcion es "newFunction" y tiene una variable de entrada llamada "input"
    // Ejemplo para usar esta función: newFunction("Hola")
}

// Función para imprimir el logotipo de EPPR en la consola al cargar la página.
function epprSignature(){
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%%%%/ .*/#%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%#                  .,/(%%%%%%")
    console.log("%%%%%%%%%%,                       ,%%%%%%")
    console.log("%%%%%%%/             .,,,..     #%%%%%%%%")
    console.log("%%%%#.        .%%#(.         *#%%%%%%%%%%")
    console.log("%%,        (%/       .,*/*,.  *#%%%%%%%%%")
    console.log("%%%%,(/*,%#    .##%(,       ./%%%%%%%%%%%")
    console.log("%%%%* %%%%%  %%*                 .%%%%%%%")
    console.log("%%%%#  %%%%%%.                      (%%%%")
    console.log("%%%%%%%%%%%(              .          .%%%")
    console.log("%%%%%%%%%%(       ,%#    (%  #%*      ,%%")
    console.log("%%%%%%%%%%.    .%#.     #%     .#%,    %%")
    console.log("%%%%%%%%%%.      #%/   /%     /%#      %%")
    console.log("%%%%%%%%%%#         * /%     ,        ,%%")
    console.log("%%%%%%%%%%%#                         ,%%%")
    console.log("%%%%%%%%%%%%%.                      #%%%%")
    console.log("%%%%%%%%%%%%%%%(                 *%%%%%%%")
    console.log("%%%%%%%%%%%%%%%%%%%#/.     .,#%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%% EPPR CLASE 304 %%%%%%%%%%%%%%")
    console.log("Visita https://github.com/eppr/304 Para más información.")
}
