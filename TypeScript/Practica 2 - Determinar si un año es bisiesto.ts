function esBisiesto (year: number): boolean {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log (esBisiesto(2000));
console.log (esBisiesto(1900));