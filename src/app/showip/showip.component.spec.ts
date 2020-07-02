import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowipComponent } from './showip.component';

describe('ShowipComponent', () => {
  let component: ShowipComponent;
  let fixture: ComponentFixture<ShowipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
