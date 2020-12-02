const url = "https://api.mocki.io/v1/0a9cd191";
let tbody = document.getElementById("tbody");

fetch(url)
    .then(data => data.json())
    .then(info => {
        let infos = info.data;
        for (let i = 0; i < infos.length; i++) {
            /* Almacenamiento de los campos Titulo, Type, Price y Rating */
            let type = infos[i].type;
            let title = infos[i].title;
            let price = infos[i].price;
            let rating = infos[i].rating;
            /* Creación de un <tr> por cada iteración */
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${type}</td>
                <td>${title}</td>
                <td>${price}</td>
                <td>${rating}</td>
            `
            tbody.appendChild(tr)
        }
    })