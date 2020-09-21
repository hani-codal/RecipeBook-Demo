import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  recipes:Recipe[] = [
    new Recipe("panipuri","It consists of a round or ball-shaped, hollow puri.","https://cdn1.foodviva.com/static-content/food-images/snacks-recipes/pani-puri/pani-puri.jpg"),
    new Recipe("pavbhaji","Pav bhaji is a fast food dish from India.","https://i2.wp.com/pipingpotcurry.com/wp-content/uploads/2018/09/Pav-Bhaji.jpg"),
    ];
}
