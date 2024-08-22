document.getElementById('savings-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener valores de entrada
    const initialAmount = parseFloat(document.getElementById('initial-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const years = parseFloat(document.getElementById('years').value);

    // Calcular ahorro futuro
    const finalAmount = initialAmount * Math.pow(1 + interestRate, years);

    // Mostrar resultado
    document.getElementById('result').innerText = `Ahorro Total: $${finalAmount.toFixed(2)}`;
});
