// JSON Data for Adventures
const adventures = [
    {
        adventurename: "Seneca Rocks",
        adventuredate: "July 14, 2024",
        adventurephoto: "seneca.png",
        customername: "Denver",
        customerquote: "Amazing",
        excurstionstmt: "Very cool",
        descriptionfile: "Seneca Rocks provides climbers a wide array of sport and traditional climbs."
    },
    {
        adventurename: "Red River Gorge",
        adventuredate: "June 14, 2024",
        adventurephoto: "rrg.png",
        customername: "Marie",
        customerquote: "Fantastic",
        excurstionstmt: "Beautiful trip",
        descriptionfile: "Premier sport climbing area in eastern Kentucky."
    },
    {
        adventurename: "New River Gorge",
        adventuredate: "August 14, 2024",
        adventurephoto: "newrg.png",
        customername: "Jon",
        customerquote: "Righteous",
        excurstionstmt: "Wild and Wonderful",
        descriptionfile: "Southern West Virginia haven for white water rafters and climbers. Wide array of bolted sport climbs."
    },
    {
        adventurename: "Shawangunk",
        adventuredate: "September 14, 2024",
        adventurephoto: "gunks.png",
        customername: "Frank",
        customerquote: "Whoa",
        excurstionstmt: "Epic trip",
        descriptionfile: "Finest climbing in southern New York. Enjoy the New Paltz area - history and local shops."
    }
];

// Function to Display Customer Cards
function displayCustomerCards() {
    const container = document.getElementById("customer-cards");
    let output = "";

    adventures.forEach(adventure => {
        output += `
            <div class="col-md-6 mb-4">
                <div class="card">
                    <img src="${adventure.adventurephoto}" class="card-img-top" alt="${adventure.adventurename}">
                    <div class="card-body">
                        <h5 class="card-title">${adventure.adventurename}</h5>
                        <p><strong>Date:</strong> ${adventure.adventuredate}</p>
                        <p><strong>Customer:</strong> ${adventure.customername}</p>
                        <blockquote class="blockquote">
                            <p>${adventure.customerquote}</p>
                        </blockquote>
                        <p>${adventure.excurstionstmt}</p>
                        <p>${adventure.descriptionfile}</p>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = output;
}

// Event Listener
document.addEventListener("DOMContentLoaded", displayCustomerCards);
