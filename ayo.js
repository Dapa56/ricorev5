document.addEventListener("DOMContentLoaded", function () {
  // Menghilangkan opasitas sebelum mengarahkan pengguna ke halaman baru
  document.body.style.opacity = "0";

  // Saat semua elemen dimuat, kembalikan opasitas menjadi normal
  setTimeout(function () {
    document.body.style.opacity = "1";
  }, 500); // Waktu yang sama dengan durasi transisi dalam milidetik
});
