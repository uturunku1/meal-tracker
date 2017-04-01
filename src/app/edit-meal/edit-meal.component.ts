import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './../meal.model';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})
export class EditMealComponent implements OnInit {
  @Input() childSelectedMeal: Meal;
  @Output() saveChangesSender = new EventEmitter;
  saveChanges(){
    this.saveChangesSender.emit();
  }

  constructor() { }
  ngOnInit() {
  }

}
