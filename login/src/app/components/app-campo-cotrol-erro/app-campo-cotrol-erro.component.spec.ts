import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCampoCotrolErroComponent } from './app-campo-cotrol-erro.component';

describe('AppCampoCotrolErroComponent', () => {
  let component: AppCampoCotrolErroComponent;
  let fixture: ComponentFixture<AppCampoCotrolErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCampoCotrolErroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCampoCotrolErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
