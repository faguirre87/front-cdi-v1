import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A06Component } from './a06.component';

describe('A06Component', () => {
  let component: A06Component;
  let fixture: ComponentFixture<A06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
