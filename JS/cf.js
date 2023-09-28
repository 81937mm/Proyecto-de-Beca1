console.log(`Usa bill para calcular la factura, speed para saber a la velocidad que vas en km/h.`);

function bill(cifra = Number, taxrate = Number) {
    if (cifra > 0, taxrate > 0) {
        console.log(`calculando la factura`)
        const plustax = cifra * taxrate
        const total = cifra + plustax + `$`
        return (total)
    } else {
        console.log(`No se puede calcular`)
        return(undefined)
    }
    
};

function speed(distancia = Number, tiempo = Number){
    if (tiempo > 0) {
        const velocidad = distancia/tiempo
        console.log(velocidad)
        return (velocidad) + "km/h"
    } else {
        console.log(`Es un valor negativo o un valor indefinido`)
        return(undefined)
    }

};

