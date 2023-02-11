// tarjetaHOLDER NAME
let nametarjeta = document.querySelector('.tarjeta_detalle-nombre');
let nameInput = document.querySelector('#tarjetaholder');
let nameErrorDiv = document.querySelector('.form_tarjetatitular--error');

// tarjeta NUMBER
let numbertarjeta = document.querySelector('.tarjeta_numero');
let numberInput = document.querySelector('#tarjetaNumber');
let numberErrorDiv = document.querySelector('.form_inputnumero--error');

// MM
let monthtarjeta = document.querySelector('.tarjeta_mes');
let monthInput = document.querySelector('#tarjetaMonth');
let monthErrorDiv = document.querySelector('.form_input-mm--error');

// YY
let yeartarjeta = document.querySelector('.tarjeta_año');
let yearInput = document.querySelector('#tarjetaYear');
let yearErrorDiv = document.querySelector('.form_input-yy--error');

// Cvv
let cvvtarjeta = document.querySelector('.tarjeta_reverso_cvv');
let cvvInput = document.querySelector('#tarjetaCvv');
let cvvErrorDiv = document.querySelector('.form_input-cvv--error');

// Ingreso dinamico del nombre
nameInput.addEventListener('input', ()=>{
    if(nameInput.value == ''){
        nametarjeta.innerText = 'TITULAR'
    }else{
        nametarjeta.innerText = nameInput.value;
    }
});

//Ingreso dinamico del numero
numberInput.addEventListener('input', ()=>{

    

    // Validando que haya una letra,
    let regExp = /[A-z]/g;
    if(regExp.test(numberInput.value)){
        showError(numberInput, numberErrorDiv, 'Wrong format, numbers only');
    }else{
        // borrando espacios ingresados por el usuario, agregando espacios cada 4 digitos, y borrando el espacio final
        numberInput.value = numberInput.value.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
        showError(numberInput, numberErrorDiv, '', false);
    }

    // Actualizando graficamente la tarjeta:
    numbertarjeta.innerText = numberInput.value;

    // Mostrando los 0s por defecto cuando no se ha ingresado nada
    if(numberInput.value == ''){
        numbertarjeta.innerText = '0000 0000 0000 0000';
    }
});

// Ingreso dinamico del mes
monthInput.addEventListener('input', ()=>{
    monthtarjeta.innerText = monthInput.value;
    validateLetters(monthInput, monthErrorDiv);
});

// Ingreso dinamico del año
yearInput.addEventListener('input', ()=>{
    yeartarjeta.innerText = yearInput.value;
    validateLetters(yearInput, yearErrorDiv);
});

// Ingreso dinamico de Cvv
cvvInput.addEventListener('input', ()=>{
    cvvtarjeta.innerText = cvvInput.value;
    validateLetters(cvvInput, cvvErrorDiv);
});


// Boton Confirm

let confirmBtn = document.querySelector('.form_submit')

let nameValidation = false;
let numberValidation = false;
let monthValidation = false;
let yearValidation = false;
let CvvValidation = false;

// Secciones Formulario y Thanks
let formSection = document.querySelector('.form');
let thanksSection = document.querySelector('.gracias');

confirmBtn.addEventListener('click', event=>{
    event.preventDefault();

    // Validar Name
    if(verifyIsFilled(nameInput, nameErrorDiv)){
        nameValidation = true;
    }else{
        nameValidation = false;
    }

    // Validad Numero
    if(verifyIsFilled(numberInput, numberErrorDiv) == true){
        if(numberInput.value.length == 19){
            showError(numberInput, numberErrorDiv, '', false);
            numberValidation = true;
        }else{
            showError(numberInput, numberErrorDiv, 'Wrong number');
            numberValidation = false;
        }
    }

    // Validar Mes
    if(verifyIsFilled(monthInput, monthErrorDiv)){
        if(parseInt(monthInput.value)>0 && parseInt(monthInput.value)<=12){
            showError(monthInput, monthErrorDiv, '', false);
            monthValidation = true;
        }else{
            showError(monthInput, monthErrorDiv, 'Wrong Month');
            monthValidation = false;
        }
    }

    // Validar año
    if(verifyIsFilled(yearInput, yearErrorDiv)){
        if(parseInt(yearInput.value)> 22 && parseInt(yearInput.value)<= 27){
            showError(yearInput, yearErrorDiv, '', false);
            yearValidation = true;
        }else{
            showError(yearInput, yearErrorDiv, 'Wrong Year');
            yearValidation = false;
        }
    }

    // Validad Cvv
    if(verifyIsFilled(cvvInput, cvvErrorDiv)){
        if(cvvInput.value.length == 3 ){
            showError(cvvInput, cvvErrorDiv, '', false);
            CvvValidation = true;
        }else{
            showError(cvvInput, cvvErrorDiv, 'Wrong Cvv');
            CvvValidation = false;
        }
    }

    if(nameValidation == true && numberValidation == true && monthValidation == true  && yearValidation == true  && CvvValidation == true){
        formSection.style.display = 'none';
        thanksSection.style.display = 'block';
    }

});


// Funciones:

function showError(divInput, divError, msgError, show = true){
    if(show){
        divError.innerText = msgError;
        divInput.style.borderColor = '#FF0000';
    }else{
        divError.innerText = msgError;
        divInput.style.borderColor = 'hsl(270, 3%, 87%)';
    }
}

function verifyIsFilled(divInput, divError){
    if(divInput.value.length> 0){
        showError(divInput, divError, "", false);
        return true;
    }else{
        showError(divInput, divError, "Can't be blank");
        return false;
    }
}

function validateLetters(input, divError){
    // Validando que haya una letra,
    let regExp = /[A-z]/g;
    if(regExp.test(input.value)){
        showError(input, divError, 'Wrong format, numbers only');
    }else{
        showError(input, divError, '', false);
    }
}