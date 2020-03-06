import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFarmaciaComponent } from './edit-farmacia.component';

describe('EditFarmaciaComponent', () => {
  let component: EditFarmaciaComponent;
  let fixture: ComponentFixture<EditFarmaciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFarmaciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
