import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router,private route:ActivatedRoute){}
  navigate(url:string){
    if(url==""){
      window.location.reload()
    }
    else{
      this.router.navigate([url],{relativeTo:this.route})
    }
  }
  logout(){
    this.router.navigateByUrl('/login')
  }

}
