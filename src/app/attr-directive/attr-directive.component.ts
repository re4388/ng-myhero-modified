import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-directive',
  templateUrl: './attr-directive.component.html',
  styleUrls: ['./attr-directive.component.css'],
})
export class AttrDirectiveComponent implements OnInit {
  color: string;
  constructor() {}

  ngOnInit(): void {}
}
