import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRate } from './service.component';


describe('ExchangeRate', () => {
  let component: ExchangeRate;
  let fixture: ComponentFixture<ExchangeRate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
