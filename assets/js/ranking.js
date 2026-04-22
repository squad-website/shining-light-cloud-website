let members = [
    { name: "Naiun", point: 5730 },
    { name: "Gian", point: 4050 },
    { name: "Lyyna", point: 3680 },
    { name: "Varlendes", point: 3540 },
    { name: "Ama", point: 2890 },
    { name: "Athaya", point: 2070 },
    { name: "Salsa", point: 1770 },
    { name: "Val", point: 2040 },
    { name: "Melody", point: 2290 },
    { name: "Khai", point: 1840 },
    { name: "Alana", point: 1390 },
    { name: "Ryu", point: 990 },
    { name: "Sho", point: 990 },
    { name: "Rick", point: 940 },
    { name: "Temi", point: 1250 },
    { name: "Shi", point: 1470 },
    { name: "Yippi", point: 590 },
    { name: "Ling", point: 565 },
    { name: "Gisel", point: 490 },
    { name: "Ellen", point: 490 },
    { name: "Micko", point: 440 },
    { name: "Visyel", point: 415 },
    { name: "Viola", point: 400 },
    { name: "Draco", point: 390 },
    { name: "Violet", point: 590 }
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
