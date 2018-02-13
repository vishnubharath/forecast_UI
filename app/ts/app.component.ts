import { Component } from '@angular/core';
import { AuthenticationService } from '../modules/login/authenticate.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
	templateUrl:'app/partials/appComponent.html',
	providers: [AuthenticationService]
})

export class AppComponent {
   
   constructor(private _authService: AuthenticationService, private router: Router){
   	 setTimeout(() => {
         
      }, 2000);
   };
}