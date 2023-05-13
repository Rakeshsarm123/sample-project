import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FooditemsService } from 'src/app/services/fooditems.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent {
  udata: any;
  items: any[] = [];
  cal = 0;
  index = 0;
  id: any;
  pro=0;
  fat=0;
  Fiber=0;



  constructor(private fs: FooditemsService, private matSnackBar: MatSnackBar) {
    fs.getUsers().subscribe({
      next: (data: any) => {
        for (let x of data) {
          if (sessionStorage.getItem("username") == x.username) {
            this.items = x.cart;
            this.id = x.id;
            break;
          }
        }
        this.calC();
      },
      error: () => this.udata = [],
    });
  }

  calC() {
    for (let x of this.items) {
      this.cal = (Number)(this.cal) + (Number)(x.Calories);
      this.pro=(Number)(this.pro) +  (Number)(x.Protein);
      this.fat=(Number)(this.fat) + (Number)(x.Fat);
      this.Fiber=(Number)(this.Fiber)+(Number)(x.Fiber);
    }
  }

  removeItem(food: any) {
    for(let i =0; i<this.items.length;i++){
      if(this.items[i].Food == food){
        this.items.splice(i,1);
        break;
      }
    }

    // for (let i = 0; i < this.items.length; i++) {
    //   if (this.items[i] && food == this.items[i].Food) {
    //     this.items.splice(i, 1);
    //     break;
    //   }
    // }

    this.fs.updatecart({"cart":this.items}, this.id).subscribe(res => {
      this.matSnackBar.open(`product removed from cart`, 'Ok', { duration: 3000 });
    });
  }
}
