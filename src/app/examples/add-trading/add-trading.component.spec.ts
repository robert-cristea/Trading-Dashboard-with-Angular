import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTradingComponent } from './add-trading.component';

describe('AddTradingComponent', () => {
  let component: AddTradingComponent;
  let fixture: ComponentFixture<AddTradingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTradingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
