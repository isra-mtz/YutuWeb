import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClinicaComponent } from './add-clinica.component';

describe('AddClinicaComponent', () => {
  let component: AddClinicaComponent;
  let fixture: ComponentFixture<AddClinicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClinicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
