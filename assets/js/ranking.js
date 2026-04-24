// ================= MEMBER =================
let members = [
    { name: "Naiun", point: 6210 },
    { name: "Gian", point: 4300 },
    { name: "Lyyna", point: 3780 },
    { name: "Varlendes", point: 3720 },

    { name: "Ama", point: 2940 },
    { name: "Melody", point: 2470 },
    { name: "Val", point: 2320 },
    { name: "Athaya", point: 2300 },

    { name: "Khai", point: 1940, inactive: true },
    { name: "Salsa", point: 1770 },
    { name: "Shi", point: 1770 },
    { name: "Temi", point: 1750 },
    { name: "Alana", point: 1540 },

    { name: "Sho", point: 1090 },
    { name: "Ryu", point: 990 },
    { name: "Rick", point: 940 },
    { name: "Violet", point: 920 },
    { name: "Yippi", point: 740 },

    { name: "Gisel", point: 690 },
    { name: "Ling", point: 565 },
    { name: "Ellen", point: 490 },
    { name: "Micko", point: 440 },
    { name: "Visyel", point: 415 },
    { name: "Viola", point: 400 },

    { name: "Lalla", point: 390 },
    { name: "Draco", point: 390 },
    { name: "Estella", point: 370 },
    { name: "Liya", point: 370 },
    { name: "Aisyah", point: 240 },
    { name: "Kanaya", point: 240 },
    { name: "Herlin", point: 240 },
    { name: "Keysa", point: 230 },

    { name: "Chika", point: 190 },
    { name: "Win", point: 190 },
    { name: "Angel", point: 170 },
    { name: "Yuriko", point: 140 },
    { name: "Laura", point: 140 },

    { name: "Ebel", point: 100 },
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

    { name: "Sky", point: 90, inactive: true },
    { name: "Alicia", point: 90 },
    { name: "Yanto", point: 90 },
    { name: "Aetheria", point: 90 },
    { name: "Chae", point: 90, inactive: true },
    { name: "Logan", point: 90 },
    { name: "Juju", point: 90 },
    { name: "Ali", point: 90 },
    { name: "Rizky", point: 90 },

    { name: "Elclio", point: 50, inactive: true },
    { name: "Mira", point: 50 },
    { name: "Ajeng", point: 50 },
    { name: "Fisa", point: 50 },
    { name: "Inan", point: 50 },
    { name: "Ath", point: 50 },
    { name: "Mon", point: 50 },
    { name: "Bintang", point: 50 },
    { name: "Alwi", point: 50 },
    { name: "Yara", point: 50 },
    { name: "Nana", point: 50 },

    { name: "Faras", point: 40 },
    { name: "Zacky", point: 40 },
    { name: "Nevvoir", point: 40 },
    { name: "Syasya", point: 40 },
    { name: "Zen", point: 40 },
    { name: "Anya", point: 40 },
    { name: "Sya", point: 40 },
    { name: "Nihan", point: 40 },
    { name: "Dev", point: 40 },
    { name: "Pai", point: 40 },
    { name: "Arfa", point: 40 },
    { name: "Ica", point: 40 },
    { name: "Selyn", point: 40 },
    { name: "Kiara (2)", point: 40 },
    { name: "Yumna", point: 40 },
    { name: "Nda", point: 40 },
    { name: "Anindya", point: 40 },
    { name: "Luis", point: 40 },
    { name: "Latasya", point: 40 },
    { name: "Airyn", point: 40 },
    { name: "Ara", point: 40 },
    { name: "Feby", point: 40 },
    { name: "Yevgeny", point: 40 },
    { name: "Esta", point: 40 },
    { name: "Naya", point: 40 },
    { name: "Pia", point: 40 },
    { name: "Sauno", point: 40 },
    { name: "Sza", point: 40 },
    { name: "Alyn", point: 40 },
    { name: "Erer", point: 40 },
    { name: "Chan", point: 40 },
    { name: "Ayrin", point: 40 }
];

// ================= ADMIN =================
let admins = [
    { name: "Rena", point: 8410 },
    { name: "Kenzo", point: 6020 },
    { name: "Marven", point: 5400 },
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
    if (point >= 3500) return "S+";
    if (point >= 2000) return "S";
    if (point >= 1200) return "A+";
    if (point >= 700) return "A";
    if (point >= 400) return "B+";
    if (point >= 200) return "B";
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
    td.setAttribute("data-label", label);
    return td;
}


// ================= RENDER MEMBER =================
function renderMembers(list) {
    const tbody = document.getElementById("rankingBody");
    tbody.innerHTML = "";

    list.forEach((m, i) => {
        const tr = document.createElement("tr");

        tr.classList.add(getTierClass(m.tier));

        if (m.inactive) {
            tr.classList.add("inactive");
        }

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
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const keyword = this.value.toLowerCase();

        const filtered = members.filter(m =>
            m.name.toLowerCase().includes(keyword)
        );

        renderMembers(filtered);
    });
}