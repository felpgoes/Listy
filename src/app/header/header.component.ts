import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public title = 'Listy'
  showOptionsList : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleOptionsList(){
    this.showOptionsList ? this.showOptionsList = false : this.showOptionsList = true;
  }

}
