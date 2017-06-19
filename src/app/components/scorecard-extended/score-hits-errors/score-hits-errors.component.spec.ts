import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreHitsErrorsComponent } from './score-hits-errors.component';

describe('ScoreHitsErrorsComponent', () => {
  let component: ScoreHitsErrorsComponent;
  let fixture: ComponentFixture<ScoreHitsErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreHitsErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreHitsErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
