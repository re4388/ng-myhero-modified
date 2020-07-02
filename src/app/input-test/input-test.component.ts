import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.css'],
})
export class InputTestComponent implements OnInit {
  msg = '';
  eventMsg = '';
  click = 0;
  inputMsg = '';
  inputMsg2 = '';

  constructor() {}

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

  onKey(event: any): void {
    this.inputMsg += event.target.value + ' | ';
  }

  /* add typing */
  onKey2(event: KeyboardEvent): void {
    this.inputMsg2 += (event.target as HTMLInputElement).value + ' | ';
  }

  ngOnInit(): void {}
}
