import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAmbulanciaComponent } from './edit-ambulancia.component';

describe('EditAmbulanciaComponent', () => {
  let component: EditAmbulanciaComponent;
  let fixture: ComponentFixture<EditAmbulanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAmbulanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAmbulanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
