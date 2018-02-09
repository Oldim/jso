import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OefhttpComponent } from './oefhttp.component';

describe('OefhttpComponent', () => {
  let component: OefhttpComponent;
  let fixture: ComponentFixture<OefhttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OefhttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OefhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
