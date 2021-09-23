import { displayMessage } from "./displayMessage.js";

export function displayProducts(productsToRender) {
  const resultsContainer = document.querySelector(".results");
  resultsContainer.innerHTML = "";

  productsToRender.forEach(function (product) {
    resultsContainer.innerHTML += `<div class="product">
                                        <h4>${product.title}</h4>
                                        <p>Price: ${product.price}</p>
                                        </div>`;
  });

  if (productsToRender.length === 0) {
    resultsContainer.innerHTML = displayMessage(
      "No products available below selected price"
    );
  }
}
