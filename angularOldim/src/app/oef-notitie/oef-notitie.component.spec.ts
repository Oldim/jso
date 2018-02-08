import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OefNotitieComponent } from './oef-notitie.component';

describe('OefNotitieComponent', () => {
  let component: OefNotitieComponent;
  let fixture: ComponentFixture<OefNotitieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OefNotitieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OefNotitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
