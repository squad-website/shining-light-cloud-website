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
    document.getElementById("tier").textContent = getTier(member.point);

});

// helper
function formatPoint(point) {
    return point >= 1000
        ? (point / 1000).toFixed(2) + " mp"
        : point + " p";
}