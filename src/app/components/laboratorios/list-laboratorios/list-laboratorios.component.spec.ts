import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLaboratoriosComponent } from './list-laboratorios.component';

describe('ListLaboratoriosComponent', () => {
  let component: ListLaboratoriosComponent;
  let fixture: ComponentFixture<ListLaboratoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLaboratoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLaboratoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
