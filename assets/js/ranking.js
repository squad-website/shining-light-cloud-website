// ================= DATA =================

// MEMBER ONLY
let members = [
    { name: "Naiun", point: 5910 },
    { name: "Gian", point: 4050 },
    { name: "Lyyna", point: 3680 },
    { name: "Varlendes", point: 3720 },
    { name: "Ama", point: 2890 },

    { name: "Melody", point: 2470 },
    { name: "Athaya", point: 2250 },
    { name: "Val", point: 2120 },
    { name: "Khai", point: 1940 },
    { name: "Salsa", point: 1770 },
    { name: "Shi", point: 1770 },
    { name: "Alana", point: 1490 },
    { name: "Temi", point: 1350 },

    { name: "Sho", point: 1090 },
    { name: "Ryu", point: 990 },
    { name: "Rick", point: 940 },

    { name: "Yippi", point: 690 },
    { name: "Violet", point: 770 },
    { name: "Gisel", point: 590 },
    { name: "Ling", point: 565 },
    { name: "Ellen", point: 490 },
    { name: "Micko", point: 440 },
    { name: "Visyel", point: 415 },
    { name: "Viola", point: 400 },

    { name: "Draco", point: 390 },
    { name: "Estella", point: 370 },
    { name: "Lalla", point: 340 },
    { name: "Liya", point: 370 },

    { name: "Aisyah", point: 240 },
    { name: "Kanaya", point: 240 },
    { name: "Herlin", point: 240 },
    { name: "Chika", point: 190 },
    { name: "Angel", point: 170 },
    { name: "Keysa", point: 230 },
    { name: "Yuriko", point: 140 },
    { name: "Laura", point: 140 },
    { name: "Win", point: 140 },

    { name: "Xander", point: 90 },
    { name: "Valrick", point: 90 },
    { name: "Yera", point: 90 },
    { name: "Rachell", point: 90 },
    { name: "Van", point: 90 },
    { name: "Mutiara", point: 90 },
    { name: "Happy", point: 90 },
    { name: "Irin", point: 90 },
    { name: "Noel", point: 90 },
    { name: "Cindy", point: 90 },
    { name: "Elodie", point: 90 },
    { name: "Kim", point: 90 },
    { name: "Ode Era", point: 90 },
    { name: "Jaja", point: 90 },
    { name: "Marcel", point: 90 },
    { name: "Erda", point: 90 },
    { name: "Zeya", point: 90 },
    { name: "Ennie", point: 90 },
    { name: "Angelica", point: 90 },
    { name: "Kiara", point: 90 },
    { name: "Sky", point: 90 },
    { name: "Alicia", point: 90 },
    { name: "Yanto", point: 90 },
    { name: "Aetheria", point: 90 },
    { name: "Chae", point: 90 },
    { name: "Logan", point: 90 },
    { name: "Juju", point: 90 },
    { name: "Ali", point: 90 },
    { name: "Rizky", point: 90 },

    { name: "Ebel", point: 50 },
    { name: "Elclio", point: 50 },
    { name: "Mira", point: 50 },

    { name: "Faras", point: 40 },
    { name: "Zacky", point: 40 },
    { name: "Zen", point: 40 }
];

// ADMIN ONLY
let admins = [
    { name: "Rena", point: 8410 },
    { name: "Kenzo", point: 5970 },
    { name: "Marven", point: 5250 },
    { name: "Alena", point: 5160 },
    { name: "Canny", point: 2760 }
];


// ================= UTIL =================

function formatPoint(point) {
    return point >= 1000
        ? (point / 1000).toFixed(2) + " mp"
        : point + " p";
}

function getTier(point) {
    if (point >= 2500) return "S+";
    if (point >= 1300) return "S";
    if (point >= 800) return "A+";
    if (point >= 400) return "A";
    if (point >= 250) return "B+";
    if (point >= 120) return "B";
    if (point >= 50) return "C";
    return "D";
}

function getTierClass(tier) {
    return {
        "S+": "tier-splus",
        "S": "tier-s",
        "A+": "tier-aplus",
        "A": "tier-a",
        "B+": "tier-bplus",
        "B": "tier-b",
        "C": "tier-c",
        "D": "tier-d"
    }[tier];
}


// ================= PREPARE DATA =================
members = members
    .map(m => ({ ...m, tier: getTier(m.point) }))
    .sort((a, b) => b.point - a.point);

admins = admins
    .map(a => ({ ...a, tier: getTier(a.point) }))
    .sort((a, b) => b.point - a.point);


// ================= CREATE CELL =================
function createCell(text, label) {
    const td = document.createElement("td");
    td.textContent = text;
    td.setAttribute("data-label", label); // 🔥 penting untuk mobile
    return td;
}


// ================= RENDER MEMBER =================
function renderMembers(list) {
    const tbody = document.getElementById("rankingBody");
    tbody.innerHTML = "";

    list.forEach((m, i) => {
        const tr = document.createElement("tr");
        tr.classList.add(getTierClass(m.tier));

        let rank = i + 1;
        if (i === 0) rank = "🥇";
        else if (i === 1) rank = "🥈";
        else if (i === 2) rank = "🥉";

        tr.appendChild(createCell(rank, "Rank"));
        tr.appendChild(createCell(m.name, "Nama"));
        tr.appendChild(createCell(formatPoint(m.point), "Poin"));
        tr.appendChild(createCell(m.tier, "Tier"));

        tbody.appendChild(tr);
    });
}


// ================= RENDER ADMIN =================
function renderAdmins() {
    const tbody = document.getElementById("adminBody");
    if (!tbody) return;

    tbody.innerHTML = "";

    admins.forEach(a => {
        const tr = document.createElement("tr");

        tr.appendChild(createCell("👑 " + a.name, "Nama"));
        tr.appendChild(createCell(formatPoint(a.point), "Poin"));
        tr.appendChild(createCell(a.tier, "Tier"));

        tbody.appendChild(tr);
    });
}


// ================= INIT =================
renderMembers(members);
renderAdmins();


// ================= SEARCH =================
document.getElementById("searchInput").addEventListener("input", function () {
    const keyword = this.value.toLowerCase();

    const filtered = members.filter(m =>
        m.name.toLowerCase().includes(keyword)
    );

    renderMembers(filtered);
});
