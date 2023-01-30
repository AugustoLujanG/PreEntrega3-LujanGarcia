class Item {
    cancha; /// de tipo Cancha
    cantidad; /// de tipo Number

    constructor(cancha, cantidad) {
        this.cancha = cancha;
        this.cantidad = cantidad;
    }

    precioTotal() {
        return this.cantidad * this.cancha.precio;
    }
}