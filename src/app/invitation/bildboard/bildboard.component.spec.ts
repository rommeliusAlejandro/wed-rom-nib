import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BildboardComponent } from './bildboard.component';

describe('BildboardComponent', () => {
  let component: BildboardComponent;
  let fixture: ComponentFixture<BildboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BildboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BildboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
