import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './../meal.model';

@Component({
  selector: 'app-new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.css']
})
export class NewMealComponent implements OnInit {
  @Output() newMealSender = new EventEmitter();
  submitForm(name:string, calorie:number, details:string, image:string){
    var newMeal: Meal = new Meal(name, calorie, details, image);
    this.newMealSender.emit(newMeal);
  }
  constructor() { }
  ngOnInit() {
  }

}
