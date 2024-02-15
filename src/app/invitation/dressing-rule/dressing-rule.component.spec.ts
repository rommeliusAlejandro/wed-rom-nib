import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressingRuleComponent } from './dressing-rule.component';

describe('DressingRuleComponent', () => {
  let component: DressingRuleComponent;
  let fixture: ComponentFixture<DressingRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DressingRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DressingRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
