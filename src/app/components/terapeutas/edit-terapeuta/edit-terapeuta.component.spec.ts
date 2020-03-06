import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTerapeutaComponent } from './edit-terapeuta.component';

describe('EditTerapeutaComponent', () => {
  let component: EditTerapeutaComponent;
  let fixture: ComponentFixture<EditTerapeutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTerapeutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTerapeutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
