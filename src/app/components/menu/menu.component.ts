import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
toggle!: boolean;
  menuToggle() {
    this.toggle = !this.toggle;
    console.log('lol');
    console.log(this.toggle);
    
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
