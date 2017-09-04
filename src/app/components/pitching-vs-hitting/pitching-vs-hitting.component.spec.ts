import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchingVsHittingComponent } from './pitching-vs-hitting.component';

describe('PitchingVsHittingComponent', () => {
  let component: PitchingVsHittingComponent;
  let fixture: ComponentFixture<PitchingVsHittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchingVsHittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchingVsHittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
