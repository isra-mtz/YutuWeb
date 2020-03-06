import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanciasComponent } from './ambulancias.component';

describe('AmbulanciasComponent', () => {
  let component: AmbulanciasComponent;
  let fixture: ComponentFixture<AmbulanciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulanciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
