import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VbforuitbrComponent } from './vbforuitbr.component';

describe('VbforuitbrComponent', () => {
  let component: VbforuitbrComponent;
  let fixture: ComponentFixture<VbforuitbrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VbforuitbrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VbforuitbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
