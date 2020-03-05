import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuscripcionComponent } from './add-suscripcion.component';

describe('AddSuscripcionComponent', () => {
  let component: AddSuscripcionComponent;
  let fixture: ComponentFixture<AddSuscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSuscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
