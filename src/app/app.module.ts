import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewMealComponent } from './new-meal/new-meal.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { CheckCaloriePipe } from './check-calorie.pipe';
import { EditMealComponent } from './edit-meal/edit-meal.component';

@NgModule({
  declarations: [
    AppComponent,
    NewMealComponent,
    MealListComponent,
    CheckCaloriePipe,
    EditMealComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
