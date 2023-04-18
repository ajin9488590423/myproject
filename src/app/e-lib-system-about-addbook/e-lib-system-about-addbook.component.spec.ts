import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELibSystemAboutAddbookComponent } from './e-lib-system-about-addbook.component';

describe('ELibSystemAboutAddbookComponent', () => {
  let component: ELibSystemAboutAddbookComponent;
  let fixture: ComponentFixture<ELibSystemAboutAddbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELibSystemAboutAddbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ELibSystemAboutAddbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
