let nombreProducto: string = "Coca Cola";
let inventario: number = 100;

function vender(cantidad: number): void {
    if (cantidad > 0 && cantidad <= inventario) {
        inventario -= cantidad;
        console.log (`Venta realizada. Inventario actual de ${nombreProducto}: ${inventario}`)
    } else {
        console.log (`No hay suficiente inventario para la venta.`);
    }
}
function reabastecer(cantidad: number): void {
    if (cantidad > 0) {
        inventario += cantidad;
        console.log(`Reabastecimiento realizado. Aumento de Inventario ${nombreProducto}: ${inventario}`)
    } else {
        console.log(`Reabastecimiento Denegado, La cantidad debe ser mayor a 0`);
    }
}

function consultaInventario (): void {
    console.log(`Inventario de ${nombreProducto}: ${inventario}`)
}
consultaInventario();
vender(10);
reabastecer(0)


