import { getSortedMembers } from "./data/data-member.js";

console.log(getSortedMembers());

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("memberList");
    if (!container) return;

    const members = getSortedMembers();

    container.innerHTML = "";

    members.forEach(member => {
        const div = document.createElement("div");
        div.className = "member-card";

        if (member.inactive) {
            div.classList.add("inactive");
        }

        div.innerHTML = `
            <img src="${member.img}" class="profil-img">
            <div class="text">
                <h3>${member.name}</h3>
                <p>${member.role} • ${formatPoint(member.point)}</p>
            </div>
        `;

        div.addEventListener("click", () => {
            window.location.href = `member-card.html?id=${member.id}`;
        });

        container.appendChild(div);
    });

});

function formatPoint(point) {
    return point >= 1000
        ? (point / 1000).toFixed(2) + " mp"
        : point + " p";
}