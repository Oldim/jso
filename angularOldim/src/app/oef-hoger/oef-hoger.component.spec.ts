import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OefHogerComponent } from './oef-hoger.component';

describe('OefHogerComponent', () => {
  let component: OefHogerComponent;
  let fixture: ComponentFixture<OefHogerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OefHogerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OefHogerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
