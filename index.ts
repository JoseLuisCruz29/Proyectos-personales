function verifyCardNumber(cardNumber: string) {
    let sumOfoddDigits = 0
    const cardNumberReversed = cardNumber.split('').reverse().join('');
    const oddDigits = cardNumberReversed.split('').filter((_, index) => index % 2 !== 0);

    for (const digit of oddDigits) {
        sumOfoddDigits += parseInt(digit);
    }
    let sumOfevenDigits = 0
    const evenDigits = cardNumberReversed.split('').filter((_, index) => index % 2 !== 0);

    for (const digit of evenDigits) {
        let numbers = parseInt(digit) * 2;
        if (numbers >= 0) {
            numbers = Math.floor(numbers / 10) + (numbers % 10);
        }
        sumOfevenDigits += numbers;
    }
    const total = sumOfevenDigits + sumOfoddDigits;
    console.log(total);
    return total % 10 === 0;
}
function main(): void {
    const cardNumber = "4111-1111-4555-1141"
    const translatedcardNumber = cardNumber.replace(/[- ]/g, '');

    if (verifyCardNumber(translatedcardNumber)) {
        console.log("Valid!")
    } else {
        console.log("Invalid!");
    }
}

main()