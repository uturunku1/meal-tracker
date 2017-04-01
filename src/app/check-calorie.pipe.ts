import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'checkCalorie',
  pure: false
})
export class CheckCaloriePipe implements PipeTransform {

  transform(input: Meal[], filterbycalorie){
    var output: Meal[] = [];
    for(var i=0; i< input.length; i++){
      if(filterbycalorie==="high" && input[i].calorie>500){
          output.push(input[i]);
      }else if(filterbycalorie==="allMeals"){
        output.push(input[i]);
      }
    }
    return output;
  }
}
