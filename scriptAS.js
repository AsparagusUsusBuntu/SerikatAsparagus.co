document.addEventListener("DOMContentLoaded", function() {
    function showSection(sectionId) {
        // Sembunyikan semua section terlebih dahulu
        document.querySelectorAll("section").forEach(section => {
            section.style.display = "none";
        });

        // Tampilkan section yang dipilih
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = "block";
        }
    }

    // Tambahkan event listener ke semua tautan navigasi
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            showSection(sectionId);
        });
    });

    // Tampilkan bagian Beranda secara default saat halaman dimuat
    showSection("Beranda");
});