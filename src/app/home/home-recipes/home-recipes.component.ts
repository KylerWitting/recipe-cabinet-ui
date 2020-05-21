import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe/shared/recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-recipes',
  templateUrl: './home-recipes.component.html',
  styleUrls: ['./home-recipes.component.css']
})
export class HomeRecipesComponent implements OnInit {

  homeRecipes: Recipe[]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.homeRecipes = this.route.snapshot.data['homeRecipes']
  }
}
