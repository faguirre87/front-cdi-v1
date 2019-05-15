import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A05Component } from './a05.component';

describe('A05Component', () => {
  let component: A05Component;
  let fixture: ComponentFixture<A05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
