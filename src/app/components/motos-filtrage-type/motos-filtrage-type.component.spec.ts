import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosFiltrageTypeComponent } from './motos-filtrage-type.component';

describe('MotosFiltrageTypeComponent', () => {
  let component: MotosFiltrageTypeComponent;
  let fixture: ComponentFixture<MotosFiltrageTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotosFiltrageTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotosFiltrageTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
