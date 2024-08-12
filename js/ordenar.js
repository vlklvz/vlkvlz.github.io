function ordena() {
    // Obtener los valores de los inputs y convertirlos a números
    var num1 = parseFloat(document.getElementById("txtUno").value);
    var num2 = parseFloat(document.getElementById("txtDos").value);
    var num3 = parseFloat(document.getElementById("txtTres").value);

    // Asegurarse de que se ingresaron números válidos
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, ingresa números válidos en todos los campos.");
        return;
    }

    // Colocar los números en un array
    var numeros = [num1, num2, num3];

    // Ordenar el array de mayor a menor
    numeros.sort(function(a, b) {
        return b - a;
    });

    // Asignar los valores ordenados a los inputs correspondientes
    document.getElementById("txtMayor").value = numeros[0];
    document.getElementById("txtMedio").value = numeros[1];
    document.getElementById("txtMenor").value = numeros[2];
}

