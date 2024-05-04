import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovidetalsComponent } from './movidetals.component';

describe('MovidetalsComponent', () => {
  let component: MovidetalsComponent;
  let fixture: ComponentFixture<MovidetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovidetalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovidetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
