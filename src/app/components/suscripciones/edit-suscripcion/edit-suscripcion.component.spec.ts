import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSuscripcionComponent } from './edit-suscripcion.component';

describe('EditSuscripcionComponent', () => {
  let component: EditSuscripcionComponent;
  let fixture: ComponentFixture<EditSuscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSuscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
