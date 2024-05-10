import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictursComponent } from './picturs.component';

describe('PictursComponent', () => {
  let component: PictursComponent;
  let fixture: ComponentFixture<PictursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
