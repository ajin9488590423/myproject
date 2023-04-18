import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELibSystemAboutPriceCareComponent } from './e-lib-system-about-price-care.component';

describe('ELibSystemAboutPriceCareComponent', () => {
  let component: ELibSystemAboutPriceCareComponent;
  let fixture: ComponentFixture<ELibSystemAboutPriceCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELibSystemAboutPriceCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ELibSystemAboutPriceCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
