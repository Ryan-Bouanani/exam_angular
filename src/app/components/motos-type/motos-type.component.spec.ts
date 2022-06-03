import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosTypeComponent } from './motos-type.component';

describe('MotosTypeComponent', () => {
  let component: MotosTypeComponent;
  let fixture: ComponentFixture<MotosTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotosTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotosTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
