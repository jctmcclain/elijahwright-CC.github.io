// JSON array containing the excursion information
const adventures = [
    {
        "adventurename": "Seneca Rocks",
        "adventuredate": "July 14, 2024",
        "adventurephoto": "seneca.png",
        "customername": "Denver",
        "customerquote": "Amazing",
        "excurstionstmt": "Very cool",
        "descriptionfile": "Seneca Rocks provides climbers a wide array of sport and traditional climbs."
    },
    {
        "adventurename": "Red River Gorge",
        "adventuredate": "June 14, 2024",
        "adventurephoto": "rrg.png",
        "customername": "Marie",
        "customerquote": "Fantastic",
        "excurstionstmt": "Beautiful trip",
        "descriptionfile": "Premier sport climbing area in eastern Kentucky."
    },
    {
        "adventurename": "New River Gorge",
        "adventuredate": "August 14, 2024",
        "adventurephoto": "newrg.png",
        "customername": "Jon",
        "customerquote": "Righteous",
        "excurstionstmt": "Wild and Wonderful",
        "descriptionfile": "Southern West Virginia haven for white water rafters and climbers. Wide array of bolted sport climbs."
    },
    {
        "adventurename": "Shawangunk",
        "adventuredate": "September 14, 2024",
        "adventurephoto": "gunks.png",
        "customername": "Frank",
        "customerquote": "Whoa",
        "excurstionstmt": "Epic trip",
        "descriptionfile": "Finest climbing in southern New York. Enjoy the New Paltz area - history and local shops."
    }
];

// Get the container where the adventure info will be displayed
const container = document.getElementById("adventure-info-container");

// Loop through the adventures array and dynamically create HTML elements
adventures.forEach(adventure => {
    // Create a column to hold the content
    const col = document.createElement("div");
    col.classList.add("col-md-3", "mb-4");
    
    // Create a div for the adventure content
    const adventureCard = document.createElement("div");
    adventureCard.classList.add("adventure-card", "text-center");

    // Create and append the image
    const img = document.createElement("img");
    img.src = adventure.adventurephoto; // Use the photo filename from the JSON
    img.alt = adventure.adventurename;  // Use the adventure name as alt text
    img.classList.add("img-fluid", "rounded-circle");
    adventureCard.appendChild(img);

    // Create and append the adventure name
    const h4 = document.createElement("h4");
    h4.textContent = adventure.adventurename;
    adventureCard.appendChild(h4);

    // Create and append the adventure date
    const pDate = document.createElement("p");
    pDate.textContent = `Date: ${adventure.adventuredate}`;
    adventureCard.appendChild(pDate);

    // Create and append the customer's quote
    const pQuote = document.createElement("p");
    pQuote.textContent = `"${adventure.customerquote}" - ${adventure.customername}`;
    adventureCard.appendChild(pQuote);

    // Create and append the excursion statement
    const pStmt = document.createElement("p");
    pStmt.textContent = `"${adventure.excurstionstmt}"`;
    adventureCard.appendChild(pStmt);

    // Create and append the adventure description
    const pDesc = document.createElement("p");
    pDesc.textContent = adventure.descriptionfile;
    adventureCard.appendChild(pDesc);

    // Append the adventure card to the column
    col.appendChild(adventureCard);
    
    // Append the column to the main container
    container.appendChild(col);
});

