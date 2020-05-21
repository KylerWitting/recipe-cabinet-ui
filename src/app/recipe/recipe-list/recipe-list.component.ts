import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../shared/recipe.model'
@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[]

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void { }
}
