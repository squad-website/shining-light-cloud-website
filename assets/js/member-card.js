const members = [
    { id: 1, name: "Naiun", role: "Member", point: 8920, img: "../../assets/img/Pony.png" },
    { id: 2, name: "Gian", role: "Member", point: 3960, img: "../../assets/img/Pony.png" },
    { id: 3, name: "Lyyna", role: "Member", point: 3110, img: "../../assets/img/Pony.png" },
    { id: 4, name: "Ama", role: "Member", point: 2850, img: "../../assets/img/Pony.png" },
    { id: 5, name: "Varlendes", role: "Member", point: 2770, img: "../../assets/img/Pony.png" }
];

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const member = members.find(m => m.id === id);

if (!member) {
    document.body.innerHTML = "<h2 style='text-align:center'>Member tidak ditemukan</h2>";
}

document.getElementById("name").textContent = member.name;
document.getElementById("photo").src = member.img;
document.getElementById("role").textContent = member.role;
document.getElementById("point").textContent = member.point;