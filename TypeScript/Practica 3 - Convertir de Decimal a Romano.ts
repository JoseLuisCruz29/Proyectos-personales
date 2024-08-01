function decimalAromano(num: number): string {
    if (num <= 0 || num >= 4000) {
        return "Debe ser un número desde 1 al 3999";
    }

    const numeroRomanos: [number, string][] = [
        [1000, "M"], [900, "CM"], [500, "D"],
        [400, "CD"], [100, "C"], [90, "XC"],
        [50, "L"], [40, "XL"], [10, "X"],
        [9, "IX"], [5, "V"], [4, "IV"],
        [1, "I"]
    ];

    let result = "";
    for (const [value, roman] of numeroRomanos) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }

    return result;
}

function volverDecimalARomano(numero: number): string {
    const romano = decimalAromano(numero);
    return `El número en romano es ${romano}`;
}

const numeroDecimal = 3555;
console.log(volverDecimalARomano(numeroDecimal)); 
