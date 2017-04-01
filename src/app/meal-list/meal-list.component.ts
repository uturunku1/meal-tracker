import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './../meal.model';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  filterbycalorie: string= "allMeals";
  editMeal(meal: Meal){
    this.clickSender.emit(meal);
  }
  onChange(allorhigh){
    this.filterbycalorie = allorhigh;
  }

  constructor() { }
  ngOnInit() {
  }
}
