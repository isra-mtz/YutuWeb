import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTerapeutaComponent } from './add-terapeuta.component';

describe('AddTerapeutaComponent', () => {
  let component: AddTerapeutaComponent;
  let fixture: ComponentFixture<AddTerapeutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTerapeutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTerapeutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
