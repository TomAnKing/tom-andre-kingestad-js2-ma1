import { displayProducts } from "./displayProducts.js";

export function filterPrice(products) {
  const search = document.querySelector(".search");

  search.onkeyup = function (filteredPrice) {
    const searchValue = parseFloat(event.target.value);

    const filteredProduct = products.filter(function (product) {
      if (product.price <= searchValue) {
        return true;
      }
    });
    if (searchValue) {
      displayProducts(filteredProduct);
    } else {
      displayProducts(products);
    }
  };
}
