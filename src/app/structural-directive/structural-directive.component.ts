import { Component, OnInit } from '@angular/core';
import { Fruit } from '../interface/hero'

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css'],
})
export class StructuralDirectiveComponent implements OnInit {
  fruit = { name: 'orange' };
  fruits: Fruit[] = [
    {
      id: 1,
      name: 'pipeapple',
      stackLevel: 'high',
    },
    {
      id: 2,
      name: 'apple',
      stackLevel: 'low',
    },
    {
      id: 3,
      name: 'banana',
      stackLevel: 'medium',
    },
  ];
  condition = false;
  constructor() {}

  trackById(index: number, hero: Hero): number {
    return hero.id;
  }

  ngOnInit(): void {}
}
