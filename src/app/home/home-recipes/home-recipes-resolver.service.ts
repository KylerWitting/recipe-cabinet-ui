import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { RecipeService } from 'src/app/recipe/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class HomeRecipesResolver implements Resolve<any> {

  constructor(private recipeService: RecipeService) { }

  resolve() {
    return this.recipeService.getRecipes()
}

}
