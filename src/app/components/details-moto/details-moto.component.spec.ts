import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMotoComponent } from './details-moto.component';

describe('DetailsMotoComponent', () => {
  let component: DetailsMotoComponent;
  let fixture: ComponentFixture<DetailsMotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
