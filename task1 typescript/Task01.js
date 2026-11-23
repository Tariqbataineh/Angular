"use strict";
// 1. Variables
let storeName = "Electroshop";
let description = "Electronics Store";
const currency = "USD";
// 2. Arrays
let productNames = ["Phone", "Laptop", "Tablet"];
// 3. Multi Type Array (Tuple)
let product = ["Phone", 500, true];
// 4. If / Else
let price = 500;
if (price > 300) {
    console.log("Expensive");
}
else {
    console.log("Affordable");
}
// 5. Loop
for (let name of productNames) {
    console.log(name);
}
// 6. Function with Return Type
function calculateDiscount(price) {
    return price - 50;
}
console.log(calculateDiscount(500));
// 7. Optional Parameter
function welcome(name) {
    console.log("Welcome " + (name || "Guest"));
}
welcome("Ahmad");
// 8. Default Parameter
function showPrice(price, currency = "USD") {
    console.log(price + " " + currency);
}
showPrice(500);
// 9. Rest Parameter
function total(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(total(10, 20, 30));
// 10. Array of Objects
let products = [
    { name: "Phone", description: "Smart Phone", price: 500 },
    { name: "Laptop", description: "Gaming Laptop", price: 1000 },
    { name: "Tablet", description: "Android Tablet", price: 300 }
];
// 11. Load Products Button
function loadProducts() {
    let container = document.getElementById("products");
    if (container) {
        container.innerHTML = "";
        products.forEach((product) => {
            container.innerHTML += `
                <p>${product.name} - ${product.description} - $${product.price}</p>
            `;
        });
    }
}
