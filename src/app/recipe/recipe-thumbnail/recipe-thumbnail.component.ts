import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'recipe-thumbnail',
  templateUrl: './recipe-thumbnail.component.html',
  styleUrls: ['./recipe-thumbnail.component.css']
})
export class RecipeThumbnailComponent implements OnInit {
  @Input() recipe: Recipe

  constructor() { }

  ngOnInit(): void {
  }

}
