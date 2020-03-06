import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTerapeutasComponent } from './list-terapeutas.component';

describe('ListTerapeutasComponent', () => {
  let component: ListTerapeutasComponent;
  let fixture: ComponentFixture<ListTerapeutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTerapeutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTerapeutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
