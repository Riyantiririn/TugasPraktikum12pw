function calculateRupiah() {
    const foreignCurrencyInput = document.getElementById('foreignCurrency');
    const resultInput = document.getElementById('result');
    const selectedCurrency = document.getElementById('currency').value;

    let exchangeRate;

    switch (selectedCurrency) {
        case 'usd':
            exchangeRate = 9915;
            break;
        case 'sgd':
            exchangeRate = 13472;
            break;
        case 'myr':
            exchangeRate = 874;
            break;
        case 'jpy':
            exchangeRate = 120;
            break;
        case 'eur':
            exchangeRate = 15888;
            break;
        case 'sar':
            exchangeRate = 3592;
            break;
        default:
            exchangeRate = 1;
    }

    const foreignCurrencyValue = parseFloat(foreignCurrencyInput.value);
    const resultValue = foreignCurrencyValue * exchangeRate;

    resultInput.value = resultValue.toFixed(2); // Display result with 2 decimal places
}
