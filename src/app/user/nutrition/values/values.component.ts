import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FooditemsService } from 'src/app/services/fooditems.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent {
  users: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private fs: FooditemsService,
    private snackbar: MatSnackBar
  ) {}

  @Input() c: any;

  navigateToAddToCart() {
    this.router.navigate(['../addtocart'], { relativeTo: this.route });
  }

  navigateToDetails() {
    this.router.navigate(['../details'], { relativeTo: this.route, state: this.c });
  }

  addToCart(product: any) {
    this.snackbar.open("Product added to cart", "Dismiss", { duration: 3000, verticalPosition: 'top' });
    this.fs.getUsers().subscribe({
      next: (data: any[]) => {
        this.users = data;
        for (let x of data) {
          if (sessionStorage.getItem("username") == x.username) {
            x.cart = x.cart || []; // Initialize watchlist if not already initialized
            x.cart.push(product);
            this.fs.updatecart({ "cart": x.cart }, x.id).subscribe({
              next: () => {},
              error: () => { console.error("Failed to update cart"); },
            });
          }
          // No need to break here if you want to update the watchlist for all matching users
        }
      },
      error: () => { this.users = []; }
    });
  }
}
