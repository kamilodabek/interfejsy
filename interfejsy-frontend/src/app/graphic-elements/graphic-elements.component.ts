import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic-elements',
  templateUrl: './graphic-elements.component.html',
  styleUrls: ['./graphic-elements.component.css']
})
export class GraphicElementsComponent {
  images = [
    {name: '../assets/owczarek.png', caption: 'owczarek'},
    {name: '../assets/doge.png', caption: 'doge'},
    {name: '../assets/surprised.png', caption: 'surprised'},
  ];
}
