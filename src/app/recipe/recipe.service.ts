import { Injectable } from '@angular/core';
import { Recipe } from './shared/recipe.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }
}

let RECIPES: Recipe[] = [
  {
    title: 'Test 01',
    id: "1",
    profile: {
      authorId: "100",
      authorName: "Kyler Witting"
    },
    summary: "This is the first recipe"
  },
  {
    title: 'Test 02',
    id: "2",
    profile: {
      authorId: "101",
      authorName: "Susan Yang"
    },
    summary: "This is the second recipe"
  }
];
