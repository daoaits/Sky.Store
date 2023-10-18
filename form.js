document.getElementById("payment-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Pembayaran berhasil!");
    // Di sini, Anda dapat menambahkan kode untuk mengirim data pembayaran ke server Anda.
});

document.getElementById("payment-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Validasi input
    const name = document.getElementById("name").value;
    const card = document.getElementById("card").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;

    if (!name || !card || !expiry || !cvv) {
        alert("Silakan lengkapi semua kolom.");
        return;
    }

    // Simulasi pembayaran (gantilah dengan integrasi pembayaran yang sesungguhnya)
    setTimeout(function () {
        document.getElementById("payment-form").reset();
        document.getElementById("message").innerHTML = "Pembayaran berhasil! Terima kasih.";
    }, 2000);

    // Animasi pesan konfirmasi
    const messageElement = document.getElementById("message");
    messageElement.style.color = "green";
    messageElement.style.fontSize = "18px";
    messageElement.style.transition = "all 1s";

    messageElement.innerHTML = "Sedang memproses pembayaran...";
});