
import { Component, OnInit } from '@angular/core';
import { Client } from '../cliente';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css'],
})
export class MainLifecycleComponent implements OnInit {
  foods: string[] = ['Rice', 'Bean'];

  clients: Client[] = [];
  name: string;
  food: string;
  age: any;
  editClient: number = -1;

  constructor() {}

  ngOnInit(): void {}

  save() {
    if (this.editClient === -1) {
      this.clients.push({
        name: this.name,
        age: this.age,
        food: this.food,
      });
    } else {
      this.clients[this.editClient].age = this.age;
      this.clients[this.editClient].name = this.name;
      this.clients[this.editClient].food = this.name;
      this.editClient =-1;
    }
    this.age = null;
    this.name = '';
    this.food = '';
  }

  remove(i: number) {
    this.clients.splice(i, 1);
  }

  edit(i: number) {
    this.age = this.clients[i].age;
    this.name = this.clients[i].name;
    this.food = this.clients[i].food;
    this.editClient = i;
  }
}
