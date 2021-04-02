import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaningPageComponent } from './laning-page.component';

describe('LaningPageComponent', () => {
  let component: LaningPageComponent;
  let fixture: ComponentFixture<LaningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaningPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
