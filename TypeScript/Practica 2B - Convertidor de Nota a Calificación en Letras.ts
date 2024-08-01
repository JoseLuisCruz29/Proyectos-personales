function convertirCalificacionALetras(calificacion: number): string {
    let letraCalificacion: string;
    //Ahora a clasificar A,B,C,D y F como calificacion
    if (calificacion >= 100) {
        letraCalificacion = "+A";
    } else if (calificacion >= 90 && calificacion <= 99) {
        letraCalificacion = "A"
    } else if (calificacion >= 80 && calificacion <= 89) {
        letraCalificacion = "B"
    } else if (calificacion >= 70 && calificacion <= 79) {
        letraCalificacion = "C"
    } else if (calificacion >= 60 && calificacion <= 69) {
        letraCalificacion = "D"
    } else {
        letraCalificacion = "F"
    }

    return `La Calificacion es ${letraCalificacion}`;
}


console.log (convertirCalificacionALetras(99));