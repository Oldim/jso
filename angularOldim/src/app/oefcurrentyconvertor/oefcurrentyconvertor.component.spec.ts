import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OefcurrentyconvertorComponent } from './oefcurrentyconvertor.component';

describe('OefcurrentyconvertorComponent', () => {
  let component: OefcurrentyconvertorComponent;
  let fixture: ComponentFixture<OefcurrentyconvertorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OefcurrentyconvertorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OefcurrentyconvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
