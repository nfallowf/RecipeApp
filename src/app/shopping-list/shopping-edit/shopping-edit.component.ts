import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;
  @Output() itemAdded = new EventEmitter<{name: string, amount: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient() {
    let nameAdded = this.nameInput.nativeElement.value;
    let amountAdded = this.amountInput.nativeElement.value;
    this.itemAdded.emit({name: nameAdded, amount: amountAdded});
  }
}
