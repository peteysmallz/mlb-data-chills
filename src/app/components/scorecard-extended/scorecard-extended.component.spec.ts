import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardExtendedComponent } from './scorecard-extended.component';

describe('ScorecardExtendedComponent', () => {
  let component: ScorecardExtendedComponent;
  let fixture: ComponentFixture<ScorecardExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorecardExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorecardExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
