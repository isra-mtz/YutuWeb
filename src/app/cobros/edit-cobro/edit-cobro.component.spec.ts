import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCobroComponent } from './edit-cobro.component';

describe('EditCobroComponent', () => {
  let component: EditCobroComponent;
  let fixture: ComponentFixture<EditCobroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCobroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCobroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
