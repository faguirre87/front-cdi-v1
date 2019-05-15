import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A07Component } from './a07.component';

describe('A07Component', () => {
  let component: A07Component;
  let fixture: ComponentFixture<A07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
