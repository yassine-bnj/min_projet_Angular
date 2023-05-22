import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MesLivres';
  id!:number
  constructor (public authService: AuthService,private router:Router,private route: ActivatedRoute,
  
    ) {
  
    }
  ngOnInit () {
   
    const currentRoute = this.router.url;
    console.log(currentRoute)
    this.authService.loadToken();
    if (currentRoute !== '/register' &&this.authService.getToken()==null ||
    this.authService.isTokenExpired()  
     )   

 this.router.navigate(['/login']);
    
    
    
    }
   
    
}
