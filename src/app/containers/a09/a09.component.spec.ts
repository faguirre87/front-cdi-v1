import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A09Component } from './a09.component';

describe('A09Component', () => {
  let component: A09Component;
  let fixture: ComponentFixture<A09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
