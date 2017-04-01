import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome!';
  selectedMeal = null;
  masterMealList: Meal[]= [
    new Meal('Ramen', 190, 'Made at home', 'http://www.eiyoukeisan.com/JapaneseFoodCalorie/zryouri/img/xramen_miso_4.jpg.pagespeed.ic.4jXoIEm_x0.jpg'),
    new Meal('Tiradito de Atun', 100, 'Eaten in Lima airport', 'http://static.emol.cl/emol50/Fotos/2013/03/21/file_20130321170533.jpg'),
    new Meal('Subway Italian B.M.T', 800, 'I did not finish my footlong Subway', 'https://c1.staticflickr.com/3/2313/2475341412_07260d377e_z.jpg?zz=1'),
  ];

  addMeal(newMeal: Meal){
    this.masterMealList.push(newMeal);
  }

  // selectedMeal: Meal = null;

  editMeal(clickedMeal){
    this.selectedMeal = clickedMeal;
  }
}
