function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Reset previous error messages
    document.getElementById('error-message').innerHTML = '';

    // Get form input values
    const namaValue = document.getElementById('nama').value;
    const emailValue = document.getElementById('email').value;
    const jamValue = document.getElementById('jam').value;
    const tujuanValue = document.getElementById('tujuan').value;
    const jumlahValue = document.getElementById('jumlah').value;

    // Validation checks
    if (namaValue.length === 0 || namaValue.length > 30) {
        displayError('Nama Pelanggan harus diisi dan maksimal 30 karakter.');
        return;
    }

    if (!validateEmail(emailValue)) {
        displayError('Format Email tidak valid.');
        return;
    }

    if (!validateJam(jamValue)) {
        displayError('Format Jam Keberangkatan tidak valid (00.00 - 23.59).');
        return;
    }

    if (tujuanValue.length === 0) {
        displayError('Tujuan Keberangkatan harus diisi.');
        return;
    }

    if (jumlahValue < 1 || jumlahValue > 10 || isNaN(jumlahValue)) {
        displayError('Jumlah Tiket harus diisi dengan bilangan bulat antara 1 - 10.');
        return;
    }

    // If all validations pass, display the form data
    displayResult(namaValue, emailValue, jamValue, tujuanValue, jumlahValue);
}

function validateEmail(email) {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateJam(jam) {
    // Simple time format validation using a regular expression
    const jamRegex = /^(0[0-9]|1[0-9]|2[0-3])\.[0-5][0-9]$/;
    return jamRegex.test(jam);
}

function displayError(message) {
    // Display error message in the designated element
    document.getElementById('error-message').innerHTML = message;
}

function displayResult(nama, email, jam, tujuan, jumlah) {
    // Display the result below the form
    const resultMessage = `Data Berhasil Diisi:<br>
                            Nama Pelanggan: ${nama}<br>
                            Email: ${email}<br>
                            Jam Keberangkatan: ${jam}<br>
                            Tujuan Keberangkatan: ${tujuan}<br>
                            Jumlah Tiket: ${jumlah}`;

    document.getElementById('result').innerHTML = resultMessage;
}

