import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = signal('Product Details');

  productName = signal('Laptop');

  productDescription = signal('Dell Laptop, Core i7, 16GB RAM');

  productPrice = signal(850);

  productAvailability = signal(true);


  // Shopping Cart Signals

  cartName = signal('');

  cartPrice = signal(0);

  cartQuantity = signal(0);


  // Receive data from Child

  receiveProduct(event: { name: string; quantity: number }) {

    this.cartName.set(event.name);

    this.cartQuantity.set(event.quantity);

    this.cartPrice.set(this.productPrice());

  }


  // Part 6: Change Product

  changeProduct() {

    this.productName.set('Wireless Headphones');

    this.productDescription.set('Bluetooth Headphones');

    this.productPrice.set(120);

    this.productAvailability.set(true);

  }

}