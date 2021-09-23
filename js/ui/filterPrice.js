import { displayProducts } from "./displayProducts.js";
export function filterPrice(products) {
  const search = document.querySelector(".search");

  search.onkeyup = function (filteredPrice) {
    console.log(event);
    const searchValue = parseFloat(event.target.value);

    const filteredProduct = products.filter(function (product) {
      if (product.price <= searchValue) {
        return true;
      }
    });
    displayProducts(filteredProduct);
  };
}
