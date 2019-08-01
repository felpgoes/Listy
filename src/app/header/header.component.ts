import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  location : boolean = false;
  public title = 'Listy';
  showOptionsList : boolean = false;
  
  constructor(
    private router: Router
    
  ) {  }
  
  ngOnInit() {
    this.page()
  }

  page(){
    if (this.router.url == '/') {
      return this.location = true
    } else {
      return this.location = false
    }
  }

  toggleOptionsList(){
    this.showOptionsList ? this.showOptionsList = false : this.showOptionsList = true;
  }
  
  }
