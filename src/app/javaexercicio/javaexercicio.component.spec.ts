import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaexercicioComponent } from './javaexercicio.component';

describe('JavaexercicioComponent', () => {
  let component: JavaexercicioComponent;
  let fixture: ComponentFixture<JavaexercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaexercicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaexercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
