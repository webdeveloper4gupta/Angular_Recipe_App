import { Component,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
//  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  // recipes:Recipe[]=[
  //   new Recipe('A Test Recipe','This is simply a Test','https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CJ5D5LQICONK73HNNH4AGLBI4A.jpg&w=1200')
  // ];

      recipes:Recipe[];
      constructor(private recipeService:RecipeService){ }

      ngOnInit(){
        this.recipes=this.recipeService.getRecipes();
      }

      // onRecipeSelected(recipe:Recipe){
      //    this.recipeWasSelected.emit(recipe);
      // }
}
