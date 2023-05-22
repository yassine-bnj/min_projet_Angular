import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();
  confirmPassword?:string;
  err=0;
  constructor(
   private authSerice:AuthService ,
   private router:Router
  ) { }

  ngOnInit(): void {
  }

onRegister()
{
  console.log(this.user)
if(this.user.password!=this.confirmPassword){
  this.err=1;
}
else{


  this.user.enabled=true
  /*this.authSerice.registerUser(this.user).subscribe((res)=>{
    console.log(res);

   

  })*/

  this.authSerice.registerUser(this.user).subscribe({
    next:(res)=>{
      console.log(res);
       alert("compte créé avec succès veuillez vous connecter")
        this.router.navigate(["/login"])
    },
    error:(err:any)=>{
      this.err = 2;
    }
  }
  )

}


}

}
