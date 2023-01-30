let carrito = []
let canchas = []

const tabla = document.getElementById('items');
const selectTipo = document.getElementById('tipo');
const selectDia = document.getElementById('dia');
const selectHora = document.getElementById('hora');
const btnSumar = document.getElementById('sumar');
const btnAgregar = document.getElementById('agregar');
const btnVaciar = document.getElementById('vaciar');
const total = document.getElementById('total');
const forms = document.querySelectorAll('form');

allEventListeners();

function allEventListeners()
{

    btnSumar.addEventListener('click', (evento) =>
    {
        evento.preventDefault();
        let cancha = new Cancha()
        cancha.tipo = selectTipo.value
        cancha.dia = selectDia.value

        date = new Date(cancha.dia)

        const day = date.getDay() + 1
        cancha.hora = parseInt(selectHora.value)

        if(cancha.tipo == 'Fútbol 5' && (day > 0 && day < 6) && (cancha.hora > 8 && cancha.hora < 13))
        {
            cancha.precio = 3000
        }
        else
        {
            if(cancha.tipo == 'Fútbol 5' && (day > 0 && day < 6) && (cancha.hora > 12 && cancha.hora < 24))
            {
                cancha.precio = 4500
            }
            else
            {
                if(cancha.tipo == 'Fútbol 5' && (day == 6) && (cancha.hora > 8 && cancha.hora < 13))
                {
                    cancha.precio = 4000
                }
                else
                {
                    if(cancha.tipo == 'Fútbol 5' && (day == 6) && (cancha.hora > 12 && cancha.hora < 24))
                    {
                        cancha.precio = 5000
                    }
                    else
                    {
                        if(cancha.tipo == 'Fútbol 5' && (day == 7))
                        {
                            cancha.precio = 6500
                        }
                        else
                        {
                            if(cancha.tipo == 'Fútbol 8' && (day > 0 && day < 6) && (cancha.hora > 8 && cancha.hora < 13))
                            {
                                cancha.precio = 5300
                            }
                            else
                            {
                                if(cancha.tipo == 'Fútbol 8' && (day > 0 && day < 6) && (cancha.hora > 12 && cancha.hora < 24))
                                {
                                    cancha.precio = 6000
                                }
                                else
                                {
                                    if(cancha.tipo == 'Fútbol 8' && (day == 6) && (cancha.hora > 8 && cancha.hora < 13))
                                    {
                                        cancha.precio = 6500
                                    }
                                    else
                                    {
                                        if(cancha.tipo == 'Fútbol 8' && (day == 6) && (cancha.hora > 12 && cancha.hora < 24))
                                        {
                                            cancha.precio = 7500
                                        }
                                        else
                                        {
                                            if(cancha.tipo == 'Fútbol 8' && (day == 7))
                                            {
                                                cancha.precio = 8000
                                            }
                                            else
                                            {
                                                if(cancha.tipo == 'Tenis descubierta' && (day > 0 && day < 6) && (cancha.hora > 8 && cancha.hora < 13))
                                                {
                                                    cancha.precio = 1000
                                                }
                                                else
                                                {
                                                    if(cancha.tipo == 'Tenis descubierta' && (day > 0 && day < 6) && (cancha.hora > 12 && cancha.hora < 24))
                                                    {
                                                        cancha.precio = 1500
                                                    }
                                                    else
                                                    {
                                                        if(cancha.tipo == 'Tenis descubierta' && (day == 6) && (cancha.hora > 8 && cancha.hora < 13))
                                                        {
                                                            cancha.precio = 1200
                                                        }
                                                        else
                                                        {
                                                            if(cancha.tipo == 'Tenis descubierta' && (day == 6) && (cancha.hora > 12 && cancha.hora < 24))
                                                            {
                                                                cancha.precio = 1800
                                                            }
                                                            else
                                                            {
                                                                if(cancha.tipo == 'Tenis descubierta' && (day == 7))
                                                                {
                                                                    cancha.precio = 2000
                                                                }
                                                                else
                                                                {
                                                                    if(cancha.tipo == 'Tenis techada' && (day > 0 && day < 6) && (cancha.hora > 8 && cancha.hora < 13))
                                                                    {
                                                                        cancha.precio = 1500
                                                                    }
                                                                    else
                                                                    {
                                                                        if(cancha.tipo == 'Tenis techada' && (day > 0 && day < 6) && (cancha.hora > 12 && cancha.hora < 24))
                                                                        {
                                                                            cancha.precio = 2000
                                                                        }
                                                                        else
                                                                        {
                                                                            if(cancha.tipo == 'Tenis techada' && (day == 6) && (cancha.hora > 8 && cancha.hora < 13))
                                                                            {
                                                                                cancha.precio = 2000
                                                                            }
                                                                            else
                                                                            {
                                                                                if(cancha.tipo == 'Tenis techada' && (day == 6) && (cancha.hora > 12 && cancha.hora < 24))
                                                                                {
                                                                                    cancha.precio = 2500
                                                                                }
                                                                                else
                                                                                {
                                                                                    if(cancha.tipo == 'Tenis techada' && (day == 7))
                                                                                    {
                                                                                        cancha.precio = 3000
                                                                                    }
                                                                                    else
                                                                                    {
                                                                                        if(cancha.tipo == 'Paddle' && (day > 0 && day < 6) && (cancha.hora > 8 && cancha.hora < 13))
                                                                                        {
                                                                                            cancha.precio = 1000
                                                                                        }
                                                                                        else
                                                                                        {
                                                                                            if(cancha.tipo == 'Paddle' && (day > 0 && day < 6) && (cancha.hora > 12 && cancha.hora < 24))
                                                                                            {
                                                                                                cancha.precio = 1300
                                                                                            }
                                                                                            else
                                                                                            {
                                                                                                if(cancha.tipo == 'Paddle' && (day == 6) && (cancha.hora > 8 && cancha.hora < 13))
                                                                                                {
                                                                                                    cancha.precio = 1200
                                                                                                }
                                                                                                else
                                                                                                {
                                                                                                    if(cancha.tipo == 'Paddle' && (day == 6) && (cancha.hora > 12 && cancha.hora < 24))
                                                                                                    {
                                                                                                        cancha.precio = 1500
                                                                                                    }
                                                                                                    else
                                                                                                    {
                                                                                                        if(cancha.tipo == 'Paddle' && (day == 7))
                                                                                                        {
                                                                                                            cancha.precio = 2000
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    
        canchas.push(cancha)
    
        localStorage.setItem('canchas',JSON.stringify(canchas));
        limpiarForms();
    })
}

function limpiarForms()
{
    forms.forEach( form => 
        {
            form.reset();
        })
}