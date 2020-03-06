import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLaboratorioComponent } from './add-laboratorio.component';

describe('AddLaboratorioComponent', () => {
  let component: AddLaboratorioComponent;
  let fixture: ComponentFixture<AddLaboratorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLaboratorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
