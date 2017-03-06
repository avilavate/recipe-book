import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {

  constructor() { 

   
  }
  detailClicked(){
    console.log(this.testShare);
  }
  @Output() deleteEvent = new EventEmitter();
  @Input() selectedRecipe: Recipe;
  ngOnInit() {
  }
  delete(){
    console.log("For deleteing recipe selected "+this.selectedRecipe);
    this.deleteEvent.emit(this.selectedRecipe);
  }
  @Input() testShare: string;
  getSelectREcipe($event) {
    alert("Hi");
    console.log($event);
  }
}
