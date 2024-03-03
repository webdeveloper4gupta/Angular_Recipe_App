import { EventEmitter, Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();

  private  recipes:Recipe[]=[
        new Recipe('A Test Recipe','This is simply a Test','https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CJ5D5LQICONK73HNNH4AGLBI4A.jpg&w=1200',[
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
                ])
      ];
      constructor(private slService:ShoppingListService){
      }
      getRecipes(){
        return this.recipes.slice();
      }
      getRecipe(index:number){
        return this.recipes.slice()[index]; //slice give you copy of the array
      }
      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}