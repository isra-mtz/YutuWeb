import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSuscripcionesComponent } from './list-suscripciones.component';

describe('ListSuscripcionesComponent', () => {
  let component: ListSuscripcionesComponent;
  let fixture: ComponentFixture<ListSuscripcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSuscripcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSuscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
