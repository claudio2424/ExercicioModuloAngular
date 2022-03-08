import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Javaexercico2Component } from './javaexercico2.component';

describe('Javaexercico2Component', () => {
  let component: Javaexercico2Component;
  let fixture: ComponentFixture<Javaexercico2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Javaexercico2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Javaexercico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
