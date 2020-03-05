import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAmbulanciasComponent } from './list-ambulancias.component';

describe('ListAmbulanciasComponent', () => {
  let component: ListAmbulanciasComponent;
  let fixture: ComponentFixture<ListAmbulanciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAmbulanciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAmbulanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
