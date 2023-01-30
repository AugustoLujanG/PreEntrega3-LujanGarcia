const tabla = document.getElementById('items');
const selectCanchas = document.getElementById('canchas')
const btnAgregar = document.getElementById('agregar');
const btnVaciar = document.getElementById('vaciar');
const total = document.getElementById('total');

let amountProduct = document.getElementById('count-product');
let carrito = JSON.parse(localStorage.getItem("carrito"));

function actualizarCounter()
{
    let countProduct = 0;
    carrito.forEach((item) =>  countProduct += item.cantidad)
    amountProduct.innerHTML = countProduct
} 

allEventListeners();

function allEventListeners()
{
    window.addEventListener('DOMContentLoaded', traerItems);

    btnVaciar.addEventListener('click', vaciarCarrito);
    
    btnAgregar.addEventListener('submit', (e) =>
    {
        e.preventDefault();
        const canchaSelected = canchas[selectCanchas.value];
        if (carrito.find((item) => {return (item.cancha.tipo === canchaSelected.tipo && item.cancha.hora === canchaSelected.hora)}) === undefined)
        {
            const nuevoItem = new Item(canchaSelected,1);
            carrito.push(nuevoItem);
            localStorage.setItem('carrito',JSON.stringify(carrito));
            newRow(nuevoItem);
        }
    });
}

function traerItems()
{
    canchas = JSON.parse(localStorage.getItem('canchas')) || []
    dropdown();
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    actualizarTablaCarrito();
}

function dropdown()
{
    canchas.forEach((canch) => {
    const option = document.createElement('option');
    option.innerText = `${canch.tipo}: ${canch.dia} - ${canch.hora}hs - $${canch.precio}`;
    option.value = canchas.indexOf(canch);
    selectCanchas.appendChild(option);
    });
}

function actualizarTablaCarrito()
{
    tabla.innerHTML = '';
    total.innerText = 0;
    carrito.forEach((item) => {
        newRow(item);
    });
}

function newRow(item)
{
    const row = document.createElement('tr');
    row.className = "text-center table-dark"
    let td = document.createElement('td');
    const posCarrito = carrito.indexOf(item);
    td.textContent = item.cancha.tipo;
    row.appendChild(td);

    td = document.createElement('td');
    td.textContent = item.cancha.dia;
    row.appendChild(td);

    td = document.createElement('td');
    td.textContent = item.cancha.hora;
    row.appendChild(td);

    td = document.createElement('td');
    td.textContent = item.cantidad;
    row.appendChild(td);

    const incrementar = document.createElement('button');
    incrementar.className = 'btn btn-primary';
    incrementar.style = 'margin: 0px 10px'
    incrementar.innerText = '+';

    const descontar = document.createElement('button');
    descontar.className = 'btn btn-primary';
    descontar.style = 'padding: 6px 15px'
    descontar.innerText = '-';

    incrementar.onclick = () => {
        carrito[posCarrito].cantidad++;
        actualizarTablaCarrito();
        localStorage.setItem('carrito',JSON.stringify(carrito));
    }

    descontar.onclick = () => {
        if (carrito[posCarrito].cantidad > 1)
        {
            carrito[posCarrito].cantidad--;
        }
        else
        {
            carrito.splice(posCarrito,1);
        }
        actualizarTablaCarrito();
        actualizarCounter ()
        localStorage.setItem('carrito',JSON.stringify(carrito));
    }

    td.appendChild(incrementar);
    td.appendChild(descontar);
    row.appendChild(td);

    td = document.createElement('td');
    td.textContent = "$" + item.cancha.precio;

    row.appendChild(td);

    const btnEliminar = document.createElement('button');
    btnEliminar.className = 'btn btn-danger';
    btnEliminar.innerText = 'Eliminar';

    btnEliminar.onclick = () => 
    {
        carrito.splice(posCarrito,1);
        actualizarTablaCarrito();
        localStorage.setItem('carrito',JSON.stringify(carrito));
        actualizarCounter ()
    }

    td = document.createElement('td')
    td.appendChild(btnEliminar);
    row.appendChild(td);
    tabla.appendChild(row);

    total.innerText = "$" + carrito.reduce((acumulador,item) => acumulador + item.cancha.precio * item.cantidad,0);
    actualizarCounter ()
}

function vaciarCarrito()
{
    Swal.fire(
    {
        title:`Esta a punto de vaciar el carrito, continuar?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar"
    }
    ).then( (result) => {
        if (result.value)
        {
        carrito = [];
        localStorage.setItem('carrito',JSON.stringify(carrito));
        actualizarTablaCarrito();
        Swal.fire(
            {
            title: "Carrito vaciado!",
            icon: "success"
            });
        }
        actualizarCounter ()
    })
}