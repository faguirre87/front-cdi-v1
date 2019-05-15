import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A04Component } from './a04.component';

describe('A04Component', () => {
  let component: A04Component;
  let fixture: ComponentFixture<A04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
