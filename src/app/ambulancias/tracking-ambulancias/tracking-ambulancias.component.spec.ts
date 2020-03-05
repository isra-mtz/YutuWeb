import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingAmbulanciasComponent } from './tracking-ambulancias.component';

describe('TrackingAmbulanciasComponent', () => {
  let component: TrackingAmbulanciasComponent;
  let fixture: ComponentFixture<TrackingAmbulanciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingAmbulanciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingAmbulanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
