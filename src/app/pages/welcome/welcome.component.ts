import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-reactive-favorite-color',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent implements OnInit {
  title = 'Manual de Angular 2 de DesarrolloWeb.com';
  visible = false;
  decirAdios() {
    this.visible = true;
  }

  constructor() {}

  ngOnInit() {}
}
