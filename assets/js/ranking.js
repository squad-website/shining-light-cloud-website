let members = [
    // S+ Tier
    { name: "Naiun", point: 5910 },
    { name: "Gian", point: 4050 },
    { name: "Lyyna", point: 3680 },
    { name: "Varlendes", point: 3720 },
    { name: "Ama", point: 2890 },

    // S Tier
    { name: "Melody", point: 2470 },
    { name: "Athaya", point: 2250 },
    { name: "Val", point: 2120 },
    { name: "Khai", point: 1940 },
    { name: "Salsa", point: 1770 },
    { name: "Shi", point: 1770 },
    { name: "Alana", point: 1490 },
    { name: "Temi", point: 1350 },

    // A+ Tier
    { name: "Sho", point: 1090 },
    { name: "Ryu", point: 990 },
    { name: "Rick", point: 940 },

    // A Tier
    { name: "Yippi", point: 690 },
    { name: "Violet", point: 770 },
    { name: "Gisel", point: 590 },
    { name: "Ling", point: 565 },
    { name: "Ellen", point: 490 },
    { name: "Micko", point: 440 },
    { name: "Visyel", point: 415 },
    { name: "Viola", point: 400 },

    // B+ Tier
    { name: "Draco", point: 390 },
    { name: "Estella", point: 370 },
    { name: "Lalla", point: 340 },
    { name: "Liya", point: 370 },

    // B Tier
    { name: "Aisyah", point: 240 },
    { name: "Kanaya", point: 240 },
    { name: "Herlin", point: 240 },
    { name: "Chika", point: 190 },
    { name: "Angel", point: 170 },
    { name: "Keysa", point: 230 },
    { name: "Yuriko", point: 140 },
    { name: "Laura", point: 140 },
    { name: "Win", point: 140 },

    // C Tier
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
    { name: "Ajeng", point: 50 },
    { name: "Fisa", point: 50 },
    { name: "Inan", point: 50 },
    { name: "Ath", point: 50 },
    { name: "Mon", point: 50 },

    // D Tier
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
    { name: "Kiara", point: 40 },
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
    { name: "Ayrin", point: 40 },

    // Admin (bonus)
    { name: "Rena", point: 8410 },
    { name: "Kenzo", point: 5970 },
    { name: "Marven", point: 5250 },
    { name: "Alena", point: 5160 },
    { name: "Canny", point: 2760 }
];

// FORMAT POINT
function formatPoint(point) {
    if (point >= 1000) {
        return (point / 1000).toFixed(2) + " mp";
    }
    return point + " p";
}

// TIER
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

// CSS CLASS
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

// Tambah tier ke member
members = members.map(m => ({
    ...m,
    tier: getTier(m.point)
}));

// Sort descending
members.sort((a, b) => b.point - a.point);

// RENDER TABLE
function renderTable(list) {
    const tbody = document.getElementById("rankingBody");
    tbody.innerHTML = "";

    list.forEach((member, index) => {
        const tr = document.createElement("tr");

        tr.classList.add(getTierClass(member.tier));

        let rankDisplay = index + 1;
        if (index === 0) rankDisplay = "🥇";
        else if (index === 1) rankDisplay = "🥈";
        else if (index === 2) rankDisplay = "🥉";

        tr.innerHTML = `
            <td>${rankDisplay}</td>
            <td>${member.name}</td>
            <td>${formatPoint(member.point)}</td>
            <td>${member.tier}</td>
        `;

        tbody.appendChild(tr);
    });
}

renderTable(members);

// SEARCH
document.getElementById("searchInput").addEventListener("input", function () {
    const keyword = this.value.toLowerCase();

    const filtered = members.filter(member =>
        member.name.toLowerCase().includes(keyword)
    );

    renderTable(filtered);
});