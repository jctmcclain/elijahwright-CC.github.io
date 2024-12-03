// Array containing the adventure information
const adventures = [
    {
        name: "The Gunks",
        image: "gunks.png",
        description: "Explore the cliffs and rock formations at The Gunks, an iconic climbing destination."
    },
    {
        name: "New River Gorge",
        image: "newriver.png",
        description: "Discover stunning views and challenging routes at the New River Gorge, a climber's paradise."
    },
    {
        name: "Red River Gorge",
        image: "rrg.png",
        description: "Adventure awaits at the Red River Gorge with world-class sport climbing and beautiful scenery."
    },
    {
        name: "Seneca Rocks",
        image: "seneca.png",
        description: "Conquer the iconic Seneca Rocks, known for its technical routes and spectacular views."
    }
];

// Get the container where the images will be displayed
const container = document.getElementById("adventure-images-container");

// Loop through the adventures array and dynamically create image elements
adventures.forEach(adventure => {
    const col = document.createElement("div");
    col.classList.add("col-md-3", "mb-4");
    
    const teamMember = document.createElement("div");
    teamMember.classList.add("team-member");

    const img = document.createElement("img");
    img.src = adventure.image; // Use the image filename
    img.alt = adventure.name;  // Use the adventure name as the alt text
    img.classList.add("img-fluid", "rounded-circle");

    const h4 = document.createElement("h4");
    h4.textContent = adventure.name;

    const p = document.createElement("p");
    p.textContent = adventure.description;

    // Append all elements to the container
    teamMember.appendChild(img);
    teamMember.appendChild(h4);
    teamMember.appendChild(p);
    col.appendChild(teamMember);
    container.appendChild(col);
});

