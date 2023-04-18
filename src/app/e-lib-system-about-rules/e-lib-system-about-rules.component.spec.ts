import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELibSystemAboutRulesComponent } from './e-lib-system-about-rules.component';

describe('ELibSystemAboutRulesComponent', () => {
  let component: ELibSystemAboutRulesComponent;
  let fixture: ComponentFixture<ELibSystemAboutRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELibSystemAboutRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ELibSystemAboutRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
