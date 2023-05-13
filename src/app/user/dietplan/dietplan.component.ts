import { Component } from '@angular/core';
import { DiettypeService } from 'src/app/service/diettype.service';

@Component({
  selector: 'app-dietplan',
  templateUrl: './dietplan.component.html',
  styleUrls: ['./dietplan.component.css']
})
export class DietplanComponent {
  names:any;
 
      constructor(hs:DiettypeService){
      hs.getDairyProducts().subscribe(
          {
            next: (data:any)=> (this.names =data),
            error: ()=> (this.names= []),
          });
          
          
      }

}
