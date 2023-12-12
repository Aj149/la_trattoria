import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ambiente3Component } from './ambiente3.component';

describe('Ambiente3Component', () => {
  let component: Ambiente3Component;
  let fixture: ComponentFixture<Ambiente3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ambiente3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ambiente3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
