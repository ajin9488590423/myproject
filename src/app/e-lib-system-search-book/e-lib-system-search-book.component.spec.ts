import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELibSystemSearchBookComponent } from './e-lib-system-search-book.component';

describe('ELibSystemSearchBookComponent', () => {
  let component: ELibSystemSearchBookComponent;
  let fixture: ComponentFixture<ELibSystemSearchBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELibSystemSearchBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ELibSystemSearchBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
