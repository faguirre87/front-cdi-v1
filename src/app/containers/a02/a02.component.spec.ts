import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A02Component } from './a02.component';

describe('A02Component', () => {
  let component: A02Component;
  let fixture: ComponentFixture<A02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
