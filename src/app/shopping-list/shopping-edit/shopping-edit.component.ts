import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  addIngredient() {
    const nameAdded = this.nameInput.nativeElement.value;
    const amountAdded = this.amountInput.nativeElement.value;
    this.shoppingService.addIngredient(new Ingredient(nameAdded, amountAdded));
  }
}
