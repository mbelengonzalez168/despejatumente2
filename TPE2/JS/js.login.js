"use strict";
const logo =document.getElementById("logo");   
const ImgInicio= document.querySelector('.conteiner-inicio');
const ImgRegistrarse= document.querySelector('.conteiner-registro');
const conteinerFormInicio = document.getElementById("container-form-inicio-sesion");
const FormInicio = document.getElementById("formulario-inicio");
const FormRegistro = document.getElementById("formulario-registro");
const main = document.querySelector('.main-login');
const btnInicioSesion= document.getElementById("btn-iniciar-sesion");
const conteinerFormRegistrarse = document.getElementById("container-form-registrarse");
const btnRegistrarse = document.getElementById('btn-registrarse');
const mnjExito= document.getElementById("mensajeExito"),
      CloseMnjExito= document.getElementById("cerrar-mnj-exito"),
      loadingContainer = document.getElementById('loading-container'),
      loadingProgress= document.getElementById('loading-progress'),
      btnFace = document.getElementById('btn-face'),
      btnGoogle = document.getElementById('btn-google'), 
      captchaCheckbox = document.getElementById('captcha');


function showLoading() {
    conteinerFormInicio.style.display = 'none';
    mnjExito.style.display = 'none';
    loadingContainer.style.display = 'block';
}
function simulateLoading() {
  let percentage = 0;
  const updatePercentage = () => {
        loadingProgress.textContent = percentage + '%';
};

const incrementPercentage = () => {
    percentage += 1;
    updatePercentage();
};

const countdownInterval = setInterval(function () {
if (percentage >= 100) {
  clearInterval(countdownInterval);
  window.location.href = 'home.html'; // Redirige una vez que se llega al 100%
} else {
  incrementPercentage();
}
}, 50); 
};

ImgInicio.addEventListener ('click',  function () { 
  if (!FormInicio.classList.contains('oculta')) {
    FormInicio.classList.add('oculta');
    main.style.height =  '400px';
  } else {
    FormInicio.classList.remove('oculta');
    main.style.height =  '700px';
    FormRegistro.classList.add('oculta');
  }
});

ImgRegistrarse.addEventListener('click', function () {
  if (!FormRegistro.classList.contains('oculta')) {
    FormRegistro.classList.add('oculta');
    main.style.height =  '400px';
  } else {
    FormRegistro.classList.remove('oculta');
    main.style.height =  '1200px';
    FormInicio.classList.add('oculta');
  }
});

FormInicio.addEventListener("submit", function(event) {
  event.preventDefault();    
    if (FormInicio.checkValidity()) {
        // Si el formulario es válido, mostrar la animación de carga
        showLoading();
        simulateLoading();
    }  
});

function ingresarAlHome() {
  // Ejecutar la animación de carga durante 5 segundos
    showLoading();
    simulateLoading();
  }

btnFace.addEventListener("click", ingresarAlHome);
btnGoogle.addEventListener("click", ingresarAlHome);
logo.addEventListener("click", ingresarAlHome);

FormRegistro.addEventListener("submit", function (event) {
  event.preventDefault();

  if (captchaCheckbox.checked && FormRegistro.checkValidity()) {
    // El CAPTCHA se completó correctamente y el formulario es válido
      conteinerFormRegistrarse.style.display = 'none';
      mnjExito.style.display = 'block';
      mnjExito.classList.add("show");
      CloseMnjExito.addEventListener('click', function () {
        showLoading();
        simulateLoading();
    });
  } else {
    // Si el CAPTCHA no se completó o el formulario no es válido, muestra un mensaje de error
      alert('Por favor, complete el CAPTCHA y verifique los campos obligatorios.');
  }
});



