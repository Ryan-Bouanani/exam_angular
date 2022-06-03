import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosFiltrageMarquesComponent } from './motos-filtrage-marques.component';

describe('MotosFiltrageMarquesComponent', () => {
  let component: MotosFiltrageMarquesComponent;
  let fixture: ComponentFixture<MotosFiltrageMarquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotosFiltrageMarquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotosFiltrageMarquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
