document.getElementById('savings-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener valores de entrada
    const product = document.getElementById('product').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseFloat(document.getElementById('term').value);
    const termPeriod = document.getElementById('term-period').value;
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const startDate = document.getElementById('start-date').value;
    const taxRate = parseFloat(document.getElementById('tax-rate').value) / 100;

    // Convertir años o meses a meses para el cálculo
    const months = termPeriod === "years" ? term * 12 : term;

    // Calcular interés compuesto y aplicar impuesto
    let totalAmount = amount;
    for (let i = 0; i < months; i++) {
        totalAmount *= (1 + interestRate / 12);
    }
    const interestGained = totalAmount - amount;
    const taxAmount = interestGained * taxRate;
    const finalAmount = totalAmount - taxAmount;

    // Mostrar resultado
    document.getElementById('result').innerText = `Ahorro Total después de impuestos: $${finalAmount.toFixed(2)}`;
});
