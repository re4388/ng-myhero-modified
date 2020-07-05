import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.css'],
})
export class InputTestComponent implements OnInit {
  /* variables */
  msg = '';
  eventMsg = '';
  click = 0;
  inputMsg = '';
  inputMsg2 = '';
  inputMsg3 = '';
  inputMsg4 = '';
  inputMsg5 = '';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() {}

  /* methods */
  toggleShowUp(): void {
    if (this.msg === '') {
      this.msg = 'show up after click';
    } else {
      this.msg = '';
    }
  }

  showEvent(event: any): void {
    const eventInfo = event ? `Event target is ${event.target.tagName}` : '';
    this.eventMsg = `clcik ${this.click++} - ${eventInfo}`;
  }

  /* beginner way */
  onKey(event: any): void {
    this.inputMsg += event.target.value + ' | ';
  }

  /* add typing */
  onKey2(event: KeyboardEvent): void {
    this.inputMsg2 += (event.target as HTMLInputElement).value + ' | ';
  }

  /* seperation of concern, only get val in comp */
  onKey3(value: string): void {
    this.inputMsg3 += value + ' | ';
  }

  /* enter handler */
  onEnter(value: string): void {
    this.inputMsg4 = value;
  }

  /* blur and enter */
  update(value: string): void {
    this.inputMsg5 = value;
  }

  /* todo add method */
  addHero(newHero: string): void {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

  ngOnInit(): void {}
}
