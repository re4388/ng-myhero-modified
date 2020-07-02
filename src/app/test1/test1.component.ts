import { Component, OnInit } from '@angular/core';
import { Hero2 } from '../../assets/hero2';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  title = 'Type2 Hero';
  heroes = [
    new Hero2(1, 'Invisible', 'can be not visible'),
    new Hero2(2, 'SlowRanger', 'can make you slow'),
    new Hero2(3, 'LighterMan', 'can walk like lighting fast'),
    new Hero2(4, 'StromPower', 'can cast a strom strike'),
    new Hero2(5, 'FastQuicker', 'make teammate move fast')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
