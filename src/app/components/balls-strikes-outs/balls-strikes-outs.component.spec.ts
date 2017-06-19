import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallsStrikesOutsComponent } from './balls-strikes-outs.component';

describe('BallsStrikesOutsComponent', () => {
  let component: BallsStrikesOutsComponent;
  let fixture: ComponentFixture<BallsStrikesOutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallsStrikesOutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallsStrikesOutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
