const nombre = prompt ("Ingrese su nombre:");
const apellido = prompt("Ingrese su apellido:")
const edad = parseInt(prompt("Ingrese su edad en años:"))
alert("Hola, "+nombre+" "+apellido+", tienes "+edad+" años.")
function verificarEdad(edad){
    if (edad>=18&&edad<=122){
        alert("Eres mayor de edad. Puede entrar al sistema.")
    }
    else if (edad<18){
        alert("Eres menor de edad. No puedes entrar al sistema.")
    }
    else if(edad<0||edad>122){
        alert("Ingrese una edad válida.")
    }
}
verificarEdad(edad);