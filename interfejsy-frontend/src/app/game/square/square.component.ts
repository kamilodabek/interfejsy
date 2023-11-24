import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button type="button" class="btn border border-secondary" style="background-color: lightgrey !important;" *ngIf="!value">{{ value }}</button>
    <button type="button" class="btn btn-secondary" *ngIf="value == 'X'">{{ value }}</button>
    <button type="button" class="btn btn-danger" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 3em !important; }']
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
