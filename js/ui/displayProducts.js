export function displayProducts(productsToRender) {
  const resultsContainer = document.querySelector(".results");
  resultsContainer.innerHTML = "";

  productsToRender.forEach(function (product) {
    resultsContainer.innerHTML += `<div class="product">
                                        <h4>${product.title}</h4>
                                        <p>Price: ${product.price}</p>
                                        </div>`;
  });
}
