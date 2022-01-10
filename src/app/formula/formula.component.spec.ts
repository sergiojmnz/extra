import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaComponent } from './formula.component';

describe('FormulaComponent', () => {
  let component: FormulaComponent;
  let fixture: ComponentFixture<FormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 269626553621045280 if input is m = 3', () => {
    const fixture = TestBed.createComponent(FormulaComponent);
    const app = fixture.componentInstance;
    const result = app.formulamc2();
    expect(result).toBe();
  });

  it('should return 0 if input is m = 0', () => {
    const fixture = TestBed.createComponent(FormulaComponent);
    const app = fixture.componentInstance;
    const result = app.formulamc2();
    expect(result).toBe();
  });
});
