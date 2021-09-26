import { displayProducts } from "./ui/displayProducts.js";
import { filterPrice } from "./ui/filterPrice.js";
import { displayError } from "./ui/displayError.js";

const url = "https://fakestoreapi.com/products";

const resultsContainer = document.querySelector(".results");

async function getProducts() {
  try {
    const response = await fetch(url);

    const json = await response.json();

    const products = json;

    filterPrice(products);
    displayProducts(products);
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = displayError("Failed to display products");
  }
}

getProducts();
