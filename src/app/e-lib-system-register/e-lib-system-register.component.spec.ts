import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELibSystemRegisterComponent } from './e-lib-system-register.component';

describe('ELibSystemRegisterComponent', () => {
  let component: ELibSystemRegisterComponent;
  let fixture: ComponentFixture<ELibSystemRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELibSystemRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ELibSystemRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
