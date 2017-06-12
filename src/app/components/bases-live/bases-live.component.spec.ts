import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasesLiveComponent } from './bases-live.component';

describe('BasesLiveComponent', () => {
  let component: BasesLiveComponent;
  let fixture: ComponentFixture<BasesLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasesLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasesLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
