// Function to load the XML data and display it
function loadServices() {
  // Fetch the XML file
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "services.xml", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var xmlDoc = xhr.responseXML;
      
      // Get all service elements
      var services = xmlDoc.getElementsByTagName("service");
      var output = '';


      // Loop through each service and build the HTML to display
      for (var i = 0; i < services.length; i++) {
        var name = services[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        var description = services[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;


        output += `
          <div class="service">
            <h2>${name}</h2>
            <p>${description}</p>
          </div>
        `;
      }


      // Insert the output into the HTML
      document.getElementById("services-container").innerHTML = output;
    }
  };
  xhr.send();
}


// Call the function when the window loads
window.onload = loadServices;