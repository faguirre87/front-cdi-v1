import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoPadreComponent } from './resultado-padre.component';

describe('ResultadoPadreComponent', () => {
  let component: ResultadoPadreComponent;
  let fixture: ComponentFixture<ResultadoPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
