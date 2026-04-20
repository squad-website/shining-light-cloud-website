const members = [
    { id: 1, name: "Naiun", role: "Member", point: 8920, img: "../../assets/img/Pony.png" },
    { id: 2, name: "Gian", role: "Member", point: 3960, img: "../../assets/img/Pony.png" },
    { id: 3, name: "Lyyna", role: "Member", point: 3110, img: "../../assets/img/Pony.png" },
    { id: 4, name: "Ama", role: "Member", point: 2850, img: "../../assets/img/Pony.png" },
    { id: 5, name: "Varlendes", role: "Member", point: 2770, img: "../../assets/img/Pony.png" }
];

members.sort((a, b) => b.point - a.point);

const container = document.getElementById("memberList");

members.forEach(member => {
    const div = document.createElement("div");
    div.className = "member-card";

    div.innerHTML = `
        <img src="${member.img}" class="profil-img">
        <div class="text">
            <h3>${member.name}</h3>
            <p>${member.role} • ${member.point}</p>
        </div>
    `;

    div.onclick = () => {
        window.location.href = `member-card.html?id=${member.id}`;
    };

    container.appendChild(div);
});