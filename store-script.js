// URL of the JSON data
const productsURL = "./gearlist.json";

// Function to load and display products
function loadProducts() {
    fetch(productsURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(products => {
            let output = "";
            products.forEach(product => {
                output += `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="${product.image}" class="card-img-top" alt="${product.name}">
                            <div class="card-body">
                                <h5 class="card-title">${product.gear_manu}</h5>
                                <p class="card-text">${product.gear_name}</p>
                                <p class="card-text"><strong>Price:</strong> $${product.gear_cost}</p>
                                <button class="btn btn-primary" onclick="buyNow('${product.gear_nam}', ${product.gear_cost})">Buy Now</button>
                            </div>
                        </div>
                    </div>
                `;
            });
            document.getElementById("product-container").innerHTML = output;
        })
        .catch(error => {
            console.error("Error fetching products:", error);
            document.getElementById("product-container").innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Failed to load products. Please check your connection or contact support.
                </div>
            `;
        });
}

// Function to handle purchase actions
function buyNow(productName, productPrice) {
    alert(`You selected ${productName}. Price: $${productPrice}. Proceeding to payment.`);
}

// Load products on page load
document.addEventListener("DOMContentLoaded", loadProducts);
