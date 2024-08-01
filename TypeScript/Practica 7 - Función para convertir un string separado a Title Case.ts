function titleCase (input: string): string {
    return input.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
}
console.log(titleCase("yo quiero taco bell")); 
console.log(titleCase("alTErNa AcaDEMy eS lo MEJOR"));