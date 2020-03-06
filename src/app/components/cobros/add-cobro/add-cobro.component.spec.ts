import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCobroComponent } from './add-cobro.component';

describe('AddCobroComponent', () => {
  let component: AddCobroComponent;
  let fixture: ComponentFixture<AddCobroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCobroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCobroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
