import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELibSystemAboutLibComponent } from './e-lib-system-about-lib.component';

describe('ELibSystemAboutLibComponent', () => {
  let component: ELibSystemAboutLibComponent;
  let fixture: ComponentFixture<ELibSystemAboutLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELibSystemAboutLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ELibSystemAboutLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
