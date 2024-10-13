// Fungsi untuk memvalidasi formulir
function validateForm(event) {
    event.preventDefault(); // Mencegah pengiriman form otomatis

    // Ambil nilai dari input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var motor = document.getElementById('motor').value;
    var date = document.getElementById('date').value;

    // Periksa apakah semua input sudah diisi
    if (name === '' || email === '' || motor === '' || date === '') {
        alert('Harap isi semua data sebelum memesan!');
        return;
    }

    // Jika validasi berhasil, tampilkan pesan konfirmasi
    alert('Terima kasih, ' + name + '! Pesanan motor Anda berhasil dilakukan. Kami akan menghubungi Anda melalui email: ' + email);
    
    // Reset form setelah pesan dikirim
    document.getElementById('booking-form').reset();
}

// Menambahkan event listener ke form
document.getElementById('booking-form').addEventListener('submit', validateForm);
