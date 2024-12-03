document.addEventListener("DOMContentLoaded", () => {
  const productsURL = "https://example.com/products.json"; // Replace with the actual URL.
  
  fetch(productsURL)
    .then((response) => response.json())
    .then((products) => {
      const productContainer = document.getElementById("product-container");
      
      products.forEach((product) => {
        const productCard = `
          <div class="col-md-4">
            <div class="card mb-4">
              <img src="${product.adventurephoto}" class="card-img-top" alt="${product.adventurename}">
              <div class="card-body">
                <h5 class="card-title">${product.adventurename}</h5>
                <p class="card-text">${product.excurstionstmt}</p>
                <p class="text-muted">${product.adventuredate}</p>
                <p class="card-text">${product.descriptionfile}</p>
                <div id="paypal-button-container-${product.adventurename.replace(/\s+/g, '-')}"></div>
              </div>
            </div>
          </div>
        `;
        productContainer.innerHTML += productCard;

        paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                description: product.adventurename,
                amount: {
                  value: '50.00' // Replace with the actual price
                }
              }]
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Transaction completed by ${details.payer.name.given_name}!`);
            });
          }
        }).render(`#paypal-button-container-${product.adventurename.replace(/\s+/g, '-')}`);
      });
    })
    .catch((error) => console.error("Error fetching products:", error));
});
