import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Javaexercicio4Component } from './javaexercicio4.component';

describe('Javaexercicio4Component', () => {
  let component: Javaexercicio4Component;
  let fixture: ComponentFixture<Javaexercicio4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Javaexercicio4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Javaexercicio4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
