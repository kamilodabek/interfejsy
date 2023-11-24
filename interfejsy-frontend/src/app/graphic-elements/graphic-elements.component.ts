import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic-elements',
  templateUrl: './graphic-elements.component.html',
  styleUrls: ['./graphic-elements.component.css']
})
export class GraphicElementsComponent {
  images = [
    {name: 'https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg', caption: 'owczarek'},
    {name: 'https://www.forbes.com/advisor/wp-content/uploads/2021/04/dogecoin.jpeg-900x510.jpg', caption: 'doge'},
    {name: 'https://i.kym-cdn.com/entries/icons/facebook/000/047/199/awkwardly_staring_dog.jpg', caption: 'surprised'},
  ];
}
