// Function to load the XML data and display it
function loadServices() {
  // Fetch the XML file
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "services.xml", true);  // Ensure services.xml path is correct
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var xmlDoc = xhr.responseXML;
      
      // Check if XML is loaded correctly
      console.log("XML Loaded Successfully", xmlDoc);

      // Get all service elements
      var services = xmlDoc.getElementsByTagName("service");
      var output = '';

      // Loop through each service and build the HTML to display
      for (var i = 0; i < services.length; i++) {
        var name = services[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        var description = services[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
        var duration = services[i].getElementsByTagName("duration")[0].childNodes[0].nodeValue;
        var cost = services[i].getElementsByTagName("cost")[0].childNodes[0].nodeValue;
        var departs = services[i].getElementsByTagName("departs")[0].childNodes[0].nodeValue;

        output += `
          <div class="service">
            <h2>${name}</h2>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Duration:</strong> ${duration}</p>
            <p><strong>Cost:</strong> ${cost}</p>
            <p><strong>Departs:</strong> ${departs}</p>
          </div>
        `;
      }

      // Insert the output into the HTML
      document.getElementById("services-container").innerHTML = output;
    } else {
      console.log("Error loading XML or service data");
    }
  };
  xhr.send();
}

// Call the function when the window loads
window.onload = loadServices;
