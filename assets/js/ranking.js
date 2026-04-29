import { members, admins, getTier } from "./data/data-member.js";

// ================= UTIL =================
function formatPoint(point) {
    return point >= 1000
        ? (point / 1000).toFixed(2) + " mp"
        : point + " p";
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

// ================= PREPARE =================
const preparedMembers = members
    .map(m => ({
        ...m,
        tier: getTier(m.point)
    }))
    .sort((a, b) => b.point - a.point);

const preparedAdmins = admins
    .map(a => ({
        ...a,
        tier: getTier(a.point)
    }))
    .sort((a, b) => b.point - a.point);

// ================= RENDER MEMBER (CARD) =================
function renderMembers(list) {
    const container = document.getElementById("rankingContainer");
    if (!container) return;

    container.innerHTML = "";

    list.forEach((m, i) => {
        const div = document.createElement("div");
        div.className = "rank-card";

        // TOP 3
        if (i === 0) div.classList.add("top1");
        else if (i === 1) div.classList.add("top2");
        else if (i === 2) div.classList.add("top3");

        // INACTIVE
        if (m.inactive) {
            div.classList.add("inactive");
        }

        let rank = i + 1;
        if (i === 0) rank = "🥇";
        else if (i === 1) rank = "🥈";
        else if (i === 2) rank = "🥉";

        div.innerHTML = `
            <div class="rank-left">
                <div class="rank-number">${rank}</div>
                <img src="${m.img}" class="rank-avatar">
                <div class="rank-info">
                    <h4>${m.name}</h4>
                    <span>${m.role}</span>
                </div>
            </div>

            <div class="rank-right">
                <div class="rank-point">${formatPoint(m.point)}</div>
                <div class="rank-tier ${getTierClass(m.tier)}">${m.tier}</div>
            </div>
        `;

        container.appendChild(div);
    });
}

// ================= RENDER ADMIN =================
function renderAdmins() {
    const container = document.getElementById("adminContainer");
    if (!container) return;

    container.innerHTML = "";

    preparedAdmins.forEach(a => {
        const div = document.createElement("div");
        div.className = "rank-card";

        div.innerHTML = `
            <div class="rank-left">
                <div class="rank-number">👑</div>
                <img src="${a.img}" class="rank-avatar">
                <div class="rank-info">
                    <h4>${a.name}</h4>
                    <span>${a.role}</span>
                </div>
            </div>

            <div class="rank-right">
                <div class="rank-point">${formatPoint(a.point)}</div>
                <div class="rank-tier ${getTierClass(a.tier)}">${a.tier}</div>
            </div>
        `;

        container.appendChild(div);
    });
}

// ================= INIT =================
renderMembers(preparedMembers);
renderAdmins();

// ================= SEARCH =================
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const keyword = this.value.toLowerCase();

        const filtered = preparedMembers.filter(m =>
            m.name.toLowerCase().includes(keyword)
        );

        renderMembers(filtered);
    });
}