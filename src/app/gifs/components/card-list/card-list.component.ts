import { Gif } from './../../interfaces/gifs.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',

})
export class CardListComponent {

  constructor() { }

  @Input()
  public gifs: Gif[] = [];

}
