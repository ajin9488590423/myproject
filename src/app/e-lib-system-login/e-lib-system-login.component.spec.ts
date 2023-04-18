import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELibSystemLoginComponent } from './e-lib-system-login.component';

describe('ELibSystemLoginComponent', () => {
  let component: ELibSystemLoginComponent;
  let fixture: ComponentFixture<ELibSystemLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELibSystemLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ELibSystemLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
