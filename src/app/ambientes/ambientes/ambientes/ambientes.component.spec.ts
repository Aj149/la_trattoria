import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientesComponent } from './ambientes.component';

describe('AmbientesComponent', () => {
  let component: AmbientesComponent;
  let fixture: ComponentFixture<AmbientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmbientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmbientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
