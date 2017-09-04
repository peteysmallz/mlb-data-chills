import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DueUpNextComponent } from './due-up-next.component';

describe('DueUpNextComponent', () => {
  let component: DueUpNextComponent;
  let fixture: ComponentFixture<DueUpNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueUpNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueUpNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
