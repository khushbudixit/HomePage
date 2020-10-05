import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 3, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 3, color: 'grey'},
    {text: 'Three', cols: 2, rows: 3, color: 'lightblue'},
    {text: 'Four', cols: 2, rows: 3, color: 'grey'},
  ];

}
