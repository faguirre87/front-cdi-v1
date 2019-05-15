import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A08Component } from './a08.component';

describe('A08Component', () => {
  let component: A08Component;
  let fixture: ComponentFixture<A08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
