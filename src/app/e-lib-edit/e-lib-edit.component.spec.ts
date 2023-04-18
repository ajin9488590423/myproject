import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELibEditComponent } from './e-lib-edit.component';

describe('ELibEditComponent', () => {
  let component: ELibEditComponent;
  let fixture: ComponentFixture<ELibEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELibEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ELibEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
