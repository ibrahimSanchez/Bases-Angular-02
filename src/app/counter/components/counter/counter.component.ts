import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3> {{ counter }}</h3>
    <button (click)="incBtn(-1)" >-1</button>
    <button (click)="resetBtn()" >Reset</button>
    <button (click)="incBtn(1)" >+1</button>
  `
})

export class CounterComponent {

  public counter: number = 0;

  incBtn( value: number ): void {
    this.counter += value;
  }
  resetBtn(): void {
    this.counter = 0;
  }

}
