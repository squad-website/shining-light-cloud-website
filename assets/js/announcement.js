const dayNames = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
const today = new Date();
const day = today.getDay();

// Format tanggal
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
const fullDate = `${dd}/${mm}/${yyyy}`;

// Data jadwal
const schedule = {
    1: {
        title: "Hari Bebas",
        desc: "Santai dulu ya. Main bebas aja atau istirahat."
    },
    2: {
        title: "Opmem",
        desc: "Mulai aktif lagi. Datang, gabung, dan ramaikan."
    },
    3: {
        title: "Training",
        desc: "Waktunya latihan biar makin jago dan makin kompak."
    },
    4: {
        title: "Opmem",
        desc: "Lanjut aktif seperti biasa. Jangan sampai sepi ya."
    },
    5: {
        title: "Opmem",
        desc: "Masih lanjut. Tetap bareng-bareng dan seru-seruan."
    },
    6: {
        title: "Patroli",
        desc: "Keliling area, lihat-lihat, dan jaga suasana biar nyaman."
    },
    0: {
        title: "Training / Patroli",
        desc: "Bisa latihan, patroli, atau kumpul santai."
    }
};

// Tunggu halaman siap dulu (biar aman)
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("event-title").textContent = schedule[day].title;
    document.getElementById("event-day").textContent = `Hari: ${dayNames[day]}`;
    document.getElementById("event-date").textContent = `Tanggal: ${fullDate}`;
    document.getElementById("event-desc").textContent = schedule[day].desc;
});