import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A03Component } from './a03.component';

describe('A03Component', () => {
  let component: A03Component;
  let fixture: ComponentFixture<A03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
