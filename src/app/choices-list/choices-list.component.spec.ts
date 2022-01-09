import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicesListComponent } from './choices-list.component';

describe('ChoicesListComponent', () => {
  let component: ChoicesListComponent;
  let fixture: ComponentFixture<ChoicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoicesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
