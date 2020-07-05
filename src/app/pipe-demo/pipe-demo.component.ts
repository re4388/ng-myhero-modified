import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
})
export class PipeDemoComponent implements OnInit {
  birthday = new Date(2000, 1, 1);
  amount = 123;
  collection: string[] = ['a', 'b', 'c', 'd'];
  toggle = true;
  number = 2;
  power = 10;
  message$: Observable<string>;
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?',
  ];

  get format(): string {
    return this.toggle ? 'shortDate' : 'longDate';
  }

  toggleFormat(): void {
    this.toggle = !this.toggle;
  }

  constructor() {}

  resend(): void {
    this.message$ = interval(500).pipe(
      map((i) => this.messages[i]),
      // take 接收起始的N个值
      take(this.messages.length)
    );
  }

  ngOnInit(): void {}
}
