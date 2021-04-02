import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormqouteComponent } from './formqoute.component';

describe('FormqouteComponent', () => {
  let component: FormqouteComponent;
  let fixture: ComponentFixture<FormqouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormqouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormqouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
