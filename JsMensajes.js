//MENSAJE GENERICO
function mostrarAlerta(icono, titulo, texto, tiempo) {
  Swal.fire({
    position: "top-center",
    icon: icono,
    title: titulo,
    text: texto,
    showConfirmButton: false,
    timer: tiempo ? 1500 : undefined // Si tiempo es true, aplica el temporizador, si es false lo omite
  });
}

/*SPINNERS*/
function mostrarSpinner(boton,texto){

  if(boton !== undefined && texto !== undefined){
    document.getElementById(boton).disabled = true;
    document.getElementById(boton).textContent = texto;
  }

  // Mostrar el spinner al iniciar
    Swal.fire({
      title: 'Procesando...',
      imageUrl: "https://drive.google.com/thumbnail?sz=100&id=1DdE8XWaXG7kaIwc8wrDPSGoag7qdP2xF",
      imageWidth: 150,
      imageHeight: 60,
      imageAlt: "A tall image",
      html: '<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>',
      showConfirmButton: false,
      allowOutsideClick: false,
    });
}

function ocultarSpinner(boton, texto){
  if(boton === undefined && texto === undefined){
    Swal.close();
  }else{
 document.getElementById(boton).disabled = false;
document.getElementById(boton).textContent = texto;
  // Ocultar el spinner cuando el script termine con éxito
  Swal.close();
  }
}
/*FIN DE SPINNERS*/


  //MENSAJE DE VALIDACIÓN
  function msgValidandoCambios(){
  let timerInterval
        Swal.fire({
          title: 'Actualizando Registro!...',
          html: 'Por favor, espere ....',
          timer: 4000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
  
          }
        });
}


/*MENSAJE DE VALIDACIÓN DPI VACIO*/
function msgDpiVacio(){
  Swal.fire({
          icon: 'error',
          title: 'UPSSS!',
          text: 'Ingrese el DPI!' });
}

//MENSAJE DE VALIDACIÓN DPI
  function msgValidacionDpi(){
  let timerInterval
        Swal.fire({
          title: 'Validando DPI...!',
          html: 'Espere....',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
  
          }
        });
}

/*MENSAJE DE DPI YA EXISTE*/
function msgDpiYaExiste(){
  Swal.fire({
          icon: 'error',
          title: 'UPSSS!',
          text: 'El DPI registrando ya existe!' });
}
