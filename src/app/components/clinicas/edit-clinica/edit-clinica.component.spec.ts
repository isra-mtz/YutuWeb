import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClinicaComponent } from './edit-clinica.component';

describe('EditClinicaComponent', () => {
  let component: EditClinicaComponent;
  let fixture: ComponentFixture<EditClinicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClinicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
