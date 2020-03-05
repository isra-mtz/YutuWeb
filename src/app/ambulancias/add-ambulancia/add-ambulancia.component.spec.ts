import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmbulanciaComponent } from './add-ambulancia.component';

describe('AddAmbulanciaComponent', () => {
  let component: AddAmbulanciaComponent;
  let fixture: ComponentFixture<AddAmbulanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmbulanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmbulanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
