export {};

let name: string = "Electroshop";

let description: string =
  "Electroshop is a leading online retailer of electronics and gadgets, offering a wide range of products from top brands. Our mission is to provide customers with the latest technology at competitive prices, along with exceptional customer service.";

const currency: string = "USD";

const productNames: string[] = [
  "Smartphone",
  "Laptop",
  "Tablet",
  "Smartwatch",
  "Wireless Earbuds",
];

const productDetails: [
  name: string,
  price: number,
  availability: boolean,
  quantity: number
][] = [
  ["Smartphone", 699, true, 10],
  ["Laptop", 1299, true, 5],
  ["Tablet", 499, false, 0],
  ["Smartwatch", 199, true, 8],
  ["Wireless Earbuds", 149, true, 15],
];

let status: boolean = true;

if (status) {
  console.log(`Welcome to ${name}!`);
  console.log(description);
  console.log(`All prices are in ${currency}.`);
  console.log("Available products:");

  productDetails.forEach((item) => {
    const price = item[1];

    if (price > 500) {
      console.log("Expensive Product");
    } else if (price >= 100 && price <= 500) {
      console.log("Moderately Priced Product");
    } else {
      console.log("Affordable Product");
    }
  });
}

let count: number = 0;

productDetails.forEach((item) => {
  const productName = item[0];
  const price = item[1];

  if (price > 100) {
    console.log(`Product: ${productName}, Price: ${price}`);
    count++;
  }
});

console.log(`Total products with price greater than 100: ${count}`);

function calculateDiscount(
  price: number,
  discountPercentage: number
): number {
  const discountAmount = (price * discountPercentage) / 100;
  return price - discountAmount;
}

console.log(calculateDiscount(100, 20));

function checkProductAvailability(productName: string): string {
  for (const product of productDetails) {
    if (product[0] === productName) {
      if (product[2]) {
        return "In Stock";
      }

      return "Out of Stock";
    }
  }

  return "Out of Stock";
}

function displayStoreMessage(message: string): void {
  console.log(message);
}

displayStoreMessage("Welcome to the store!");

function displayProductDetails(
  productName: string,
  price: number,
  quantity: number,
  description?: string,
  currency: string = "USD"
): void {
  console.log(`Product Name: ${productName}`);
  console.log(`Price: ${price} ${currency}`);
  console.log(`Quantity: ${quantity}`);
  console.log(
    `Description: ${description || "No description available"}`
  );
  console.log(`Currency: ${currency}`);
}

function calculateTotalPrice(): number {
  let total = 0;
  productDetails.forEach((product) => {
    total = total + product[1];
  });

  return total;
}

console.log(calculateTotalPrice());

const products = [
  {
    name: "Smartphone",
    description: "A mobile phone with a touchscreen.",
    price: 699,
  },
  {
    name: "Laptop",
    description: "A portable computer for work and study.",
    price: 1299,
  },
  {
    name: "Wireless Earbuds",
    description: "Wireless headphones for listening to audio.",
    price: 149,
  },
];

const button = document.getElementById("load-products");
const container = document.getElementById("products");

if (button && container) {
  button.addEventListener("click", function () {
    container.innerHTML = "";

    products.forEach(function (product) {
      container.innerHTML +=
        `<p>${product.name} - ${product.description} - $${product.price}</p>`;
    });
  });
}