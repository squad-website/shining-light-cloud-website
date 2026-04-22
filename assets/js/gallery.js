document.addEventListener("DOMContentLoaded", () => {

    const galleryGrid = document.querySelector(".gallery-grid");
    const filterButtons = document.querySelectorAll(".filter-menu button");
    const monthMenu = document.getElementById("month-menu");
    const monthLabel = document.getElementById("month-label");

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox .close");

    let currentMonth = "";
    let currentFilter = "semua";

    const monthNames = [
        "januari","februari","maret","april","mei","juni",
        "juli","agustus","september","oktober","november","desember"
    ];

    const galleryData = {
        januari: [],
        februari: [],
        maret: [],
        april: [
            {
                img: "../assets/img/april/18.png",
                title: "Hari 18",
                desc: "Patroli dan Foto Bersama",
                category: "patroli",
            },

            {
                img: "../assets/img/april/19.png",
                title: "Hari 19",
                desc: "Patroli dan Foto Bersama",
                category: "patroli",
            },

            {
                img: "../assets/img/april/20.png",
                title: "Hari 20",
                desc: "Opmem dan Foto Bersama",
                category: "opmem",
            },

            {
                img: "../assets/img/april/21.png",
                title: "Hari 21",
                desc: "Opmem dan Foto Bersama",
                category: "opmem",
            },

            {
                img: "../assets/img/april/22.png",
                title: "Hari 22",
                desc: "Training dan Foto Bersama",
                category: "training",
            }
        ],
        mei: [],
        juni: [],
        juli: [],
        agustus: [],
        september: [],
        oktober: [],
        november: [],
        desember: []
    };

    monthNames.forEach((month, index) => {

        const btn = document.createElement("button");
        btn.textContent = month.charAt(0).toUpperCase() + month.slice(1);
        btn.classList.add("month-btn");
        btn.setAttribute("data-month", month);

        if (index === new Date().getMonth()) {
            btn.classList.add("active");
            currentMonth = month;
        }

        btn.addEventListener("click", () => {

            document.querySelectorAll(".month-btn")
                .forEach(b => b.classList.remove("active"));

            btn.classList.add("active");
            currentMonth = month;

            currentFilter = "semua";
            filterButtons.forEach(b => b.classList.remove("active"));
            filterButtons[0].classList.add("active");

            renderGallery();
        });

        monthMenu.appendChild(btn);
    });

    function renderGallery() {
        galleryGrid.innerHTML = "";

        const data = galleryData[currentMonth] || [];

        monthLabel.textContent = `Dokumentasi bulan ${currentMonth}`;

        if (data.length === 0) {
            galleryGrid.innerHTML = `<p style="color:white;">Belum ada foto</p>`;
            return;
        }

        data.forEach(item => {

            if (currentFilter !== "semua" && item.category !== currentFilter) return;

            galleryGrid.innerHTML += `
                <div class="card">
                    <img src="${item.img}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            `;
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {

            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            currentFilter = btn.getAttribute("data-filter");

            renderGallery();
        });
    });

    document.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG" && e.target.closest(".card")) {
            lightbox.style.display = "flex";
            lightboxImg.src = e.target.src;
        }
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    document.addEventListener("contextmenu", e => e.preventDefault());

    document.addEventListener("dragstart", e => {
        if (e.target.tagName === "IMG") {
            e.preventDefault();
        }
    });

    renderGallery();

});
