/*********************************************************************************
*  WEB422 – Assignment 06
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: _Angelo Dikon Wong____ Student ID: _148021199____ Date: _07 April, 2022__
*
*  Angular App (Deployed) Link: _____________________________________________________
*
*  User API (Heroku) Link: https://web422ass06wong.herokuapp.com
*
********************************************************************************/ 


import { Component } from '@angular/core';
import { NavigationStart, Router, Event } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web422-a5';
  searchString: string | undefined; 
  token: any;

  constructor(private router: Router, private auth: AuthService){}

  handleSearch(){
    this.router.navigate(['/search'], {queryParams: { q: this.searchString }});
    this.searchString = "";
  }

  ngOnInit(){

    this.router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationStart) {
        this.token = this.auth.readToken();
      }
    });

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
