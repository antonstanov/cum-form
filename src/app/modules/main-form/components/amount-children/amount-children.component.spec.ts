import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountChildrenComponent } from './amount-children.component';

describe('AmountChildrenComponent', () => {
  let component: AmountChildrenComponent;
  let fixture: ComponentFixture<AmountChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
