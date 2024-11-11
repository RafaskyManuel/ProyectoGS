/*VALIDACIONES GENERICAS*/
  //VALIDAR EL PRECIO QUE NO SUPERE UN LIMITE MAYOR A 5 DIGITOS
  function validarPrecio(input) {
  if (input.value.length > 5) {
    input.value = input.value.slice(0, 5); // Corta a los primeros 5 caracteres
  }
  if (input.value > 99999) {
    input.value = 99999; // Si supera el máximo, ajustar al valor máximo
  }
  if (input.value < 0) {
    input.value = 0; // Si es negativo, ajustar a 0
  }
}

//VALIDAR ENTRADAS DE SELECT
function validacionCmb(comboBox, listaComboBox) {
  let input = document.getElementById(comboBox);
  let lista = document.getElementById(listaComboBox);
  let opciones = lista.options;
  let valorValido = false;

  // Comprobar si el valor en el input coincide con alguna opción
  for (let i = 0; i < opciones.length; i++) {
    if (input.value === opciones[i].value) {
      valorValido = true;
      break;
    }
  }

  // Si el valor no es válido, limpiar el campo
  if (!valorValido) {
    input.value = '';  // Deja el campo en blanco si no coincide con ninguna opción
  }
}

//VALIDA LOS DIGITOS DEL NUMERO DE TELEFONO
function validarNumeroTelefono(input,error) {
  const telefonoInput = document.getElementById(input);
  const telefonoError = document.getElementById(error);

  let telefono = telefonoInput.value;

  // Limitar el número de dígitos a 8
  if (telefono.length > 8) {
    telefono = telefono.slice(0, 8); // Cortar el valor a los primeros 8 dígitos
    telefonoInput.value = telefono;  // Actualizar el valor en el campo de entrada
  }

  // Validar si tiene exactamente 8 dígitos
  if (telefono.length === 8 && /^[0-9]+$/.test(telefono)) {
    telefonoError.style.display = "none"; // Ocultar el mensaje de error si es válido
  } else {
    telefonoError.style.display = "block"; // Mostrar el mensaje de error si es inválido
    telefonoError.innerHTML ="El número de teléfono debe tener exactamente 8 dígitos";
  }
}

//Valida si el correo electronico es valido
function validarCorreoUsuario(input, error) {
  const correoInput = document.getElementById(input);
  const correoError = document.getElementById(error);

  const correo = correoInput.value;

  // Expresión regular para validar el formato de correo electrónico
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verificar si el correo tiene un formato válido
  if (correoRegex.test(correo)) {
    correoError.style.display = "none";  // Ocultar el mensaje si el correo es válido
  } else {
    correoError.style.display = "block"; // Mostrar el mensaje si el correo no es válido
    correoError.innerHTML ="Ingrese un correo electrónico válido";
  }
}
