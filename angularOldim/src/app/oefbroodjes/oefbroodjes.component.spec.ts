import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OefbroodjesComponent } from './oefbroodjes.component';

describe('OefbroodjesComponent', () => {
  let component: OefbroodjesComponent;
  let fixture: ComponentFixture<OefbroodjesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OefbroodjesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OefbroodjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
