import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Javaecercicio3Component } from './javaecercicio3.component';

describe('Javaecercicio3Component', () => {
  let component: Javaecercicio3Component;
  let fixture: ComponentFixture<Javaecercicio3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Javaecercicio3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Javaecercicio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
