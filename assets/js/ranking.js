
let members = [
    { name: "Alissa", point: 6690 },
    { name: "Gian", point: 3230 },
    { name: "Alena", point: 3200 },
    { name: "Marven", point: 2910 },
    { name: "Ama", point: 2550 },
    { name: "Lyra", point: 2300 },
    { name: "Ravel", point: 1980 },
    { name: "Nathanael", point: 1200 }
];

members.sort((a, b) => b.point - a.point);


function renderTable(list) {
    const tbody = document.getElementById("ranking-body");
    tbody.innerHTML = "";

    list.forEach((member, index) => {
        let tr = document.createElement("tr");

        if (index === 0) tr.classList.add("top1");
        if (index === 1) tr.classList.add("top2");
        if (index === 2) tr.classList.add("top3");

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${member.name}</td>
            <td>${member.point}</td>
        `;

        tbody.appendChild(tr);
    });
}

renderTable(members);


document.getElementById("search").addEventListener("keyup", function () {
    let keyword = this.value.toLowerCase();

    let filtered = members.filter(member =>
        member.name.toLowerCase().includes(keyword)
    );

    renderTable(filtered);
});