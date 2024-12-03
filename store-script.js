document.addEventListener("DOMContentLoaded", () => {
    const productsURL = "http://158.101.118.50/data/gearlist.json";
  
    fetch(productsURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(products => {
            const productContainer = document.getElementById("product-container");
            productContainer.innerHTML = ""; // Clear any previous content
            
            products.forEach(product => {
                const productCard = `
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <img src="${product.adventurephoto}" class="card-img-top" alt="${product.adventurename}">
                            <div class="card-body">
                                <h5 class="card-title">${product.adventurename}</h5>
                                <p>${product.excurstionstmt}</p>
                                <p class="text-muted">${product.adventuredate}</p>
                                <p>${product.descriptionfile}</p>
                                <div id="paypal-button-container-${product.adventurename.replace(/\s+/g, '-')}"></div>
                            </div>
                        </div>
                    </div>
                `;
                productContainer.innerHTML += productCard;

                // Render PayPal button for each product
                paypal.Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                description: product.adventurename,
                                amount: { value: '50.00' } // Replace with dynamic pricing if available
                            }]
                        });
                    },
                    onApprove: (data, actions) => {
                        return actions.order.capture().then(details => {
                            alert(`Transaction completed by ${details.payer.name.given_name}!`);
                        });
                    }
                }).render(`#paypal-button-container-${product.adventurename.replace(/\s+/g, '-')}`);
            });
        })
        .catch(error => {
            console.error("Error fetching products:", error);
            document.getElementById("product-container").innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Failed to load products. Please try again later.
                </div>
            `;
        });
});


