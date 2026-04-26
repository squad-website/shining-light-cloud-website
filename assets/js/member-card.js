import { members, getTier } from "./data/data-member.js";

document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    const member = members.find(m => m.id === id);

    if (!member) {
        document.body.innerHTML = "<h2 style='text-align:center'>Member tidak ditemukan</h2>";
        return;
    }

    // isi data ke halaman
    document.getElementById("name").textContent = member.name;
    document.getElementById("photo").src = member.img;
    document.getElementById("role").textContent = member.role;
    document.getElementById("point").textContent = formatPoint(member.point);

    // 🔥 ambil tier sekali
    const tier = getTier(member.point);
    document.getElementById("tier").textContent = tier;

    // 🔥 kasih ke card untuk styling
    const card = document.getElementById("card");

    if (card) {
        // untuk badge (data-tier="S+")
        card.dataset.tier = tier;

        // untuk class CSS (tier-splus, tier-a, dll)
        const tierClassMap = {
            "S+": "tier-splus",
            "S": "tier-s",
            "A+": "tier-aplus",
            "A": "tier-a",
            "B+": "tier-bplus",
            "B": "tier-b",
            "C": "tier-c",
            "D": "tier-d"
        };

        card.classList.add(tierClassMap[tier]);
    }

});

// helper
function formatPoint(point) {
    return point >= 1000
        ? (point / 1000).toFixed(2) + " mp"
        : point + " p";
}