import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ambiente1Component } from './ambiente1.component';

describe('Ambiente1Component', () => {
  let component: Ambiente1Component;
  let fixture: ComponentFixture<Ambiente1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ambiente1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ambiente1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
