import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLaboratorioComponent } from './edit-laboratorio.component';

describe('EditLaboratorioComponent', () => {
  let component: EditLaboratorioComponent;
  let fixture: ComponentFixture<EditLaboratorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLaboratorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
