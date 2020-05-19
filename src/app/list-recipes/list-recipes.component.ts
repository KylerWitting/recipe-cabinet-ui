import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {
  // recipes: Recipe[]

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    // this.recipes = this.route.snapshot.data['recipes']
  }
}
