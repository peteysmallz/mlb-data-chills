import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPlayComponent } from './last-play.component';

describe('LastPlayComponent', () => {
  let component: LastPlayComponent;
  let fixture: ComponentFixture<LastPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
