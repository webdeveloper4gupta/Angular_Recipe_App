import { Component, EventEmitter, Input, Output,OnInit} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
// Here I explain you the concept of the cross component communication
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
 @Input() recipe!: Recipe;
  //  @Output()  recipeSelected=new EventEmitter<void>();
  // constructor(private recipeService:RecipeService){

  // }
  ngOnInit(): void {
    
  }
  // onSelected(){
  //   // this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
