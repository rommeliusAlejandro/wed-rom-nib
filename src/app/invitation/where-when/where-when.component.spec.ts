import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereWhenComponent } from './where-when.component';

describe('WhereWhenComponent', () => {
  let component: WhereWhenComponent;
  let fixture: ComponentFixture<WhereWhenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereWhenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
