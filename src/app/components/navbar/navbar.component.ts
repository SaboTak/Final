import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services/authentication.service';
import { User } from '../../_models/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     }

  currentUser: User;
  
  ngOnInit() {
  }


  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}
