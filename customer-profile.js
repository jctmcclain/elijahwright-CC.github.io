document.addEventListener("DOMContentLoaded", function () {
    const adventures = [
        {
            adventurename: "Seneca Rocks",
            adventuredate: "July 14, 2024",
            adventurephoto: "https://elijahwright-cc.github.io/seneca.png",
            customername: "Denver",
            customerquote: "Amazing",
            excurstionstmt: "Very cool",
            descriptionfile: "Seneca Rocks provides climbers a wide array of sport and traditional climbs."
        },
        {
            adventurename: "Red River Gorge",
            adventuredate: "June 14, 2024",
            adventurephoto: "https://elijahwright-cc.github.io/rrg.png",
            customername: "Marie",
            customerquote: "Fantastic",
            excurstionstmt: "Beautiful trip",
            descriptionfile: "Premier sport climbing area in eastern Kentucky."
        },
        {
            adventurename: "New River Gorge",
            adventuredate: "August 14, 2024",
            adventurephoto: "https://elijahwright-cc.github.io/newriver.png",
            customername: "Jon",
            customerquote: "Righteous",
            excurstionstmt: "Wild and Wonderful",
            descriptionfile: "Southern West Virginia haven for white water rafters and climbers. Wide array of bolted sport climbs."
        },
        {
            adventurename: "Shawangunk",
            adventuredate: "September 14, 2024",
            adventurephoto: "https://elijahwright-cc.github.io/gunks.png",
            customername: "Frank",
            customerquote: "Whoa",
            excurstionstmt: "Epic trip",
            descriptionfile: "Finest climbing in southern New York. Enjoy the New Paltz area - history and local shops."
        }
    ];

    const adventureCards = document.getElementById("adventure-cards");

    adventures.forEach(adventure => {
        const card = document.createElement("div");
        card.className = "card mb-3";
        card.innerHTML = `
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${adventure.adventurephoto}" class="card-img" alt="${adventure.adventurename}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${adventure.adventurename}</h5>
                        <p class="card-text"><strong>Date:</strong> ${adventure.adventuredate}</p>
                        <p class="card-text"><strong>Customer:</strong> ${adventure.customername}</p>
                        <p class="card-text"><strong>Quote:</strong> "${adventure.customerquote}"</p>
                        <p class="card-text">${adventure.descriptionfile}</p>
                        <p class="card-text"><em>${adventure.excurstionstmt}</em></p>
                    </div>
                </div>
            </div>
        `;
        adventureCards.appendChild(card);
    });
});
