import { getSortedMembers } from "./data/data-member.js";

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("memberList");
    const searchInput = document.getElementById("searchInput");

    if (!container) return;

    const members = getSortedMembers();

    // --- RENDER MEMBER LIST ---
    function renderList(list) {
        container.innerHTML = "";

        list.forEach(member => {
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
    }

    // Render awal
    renderList(members);

    // --- SEARCH FILTER ---
    searchInput.addEventListener("input", () => {
        const keyword = searchInput.value.toLowerCase();

        const filtered = members.filter(m =>
            m.name.toLowerCase().includes(keyword)
        );

        renderList(filtered);
    });
});

// Format angka
function formatPoint(point) {
    return point >= 1000
        ? (point / 1000).toFixed(2) + " mp"
        : point + " p";
}