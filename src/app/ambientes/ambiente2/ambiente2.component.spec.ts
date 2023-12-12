import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ambiente2Component } from './ambiente2.component';

describe('Ambiente2Component', () => {
  let component: Ambiente2Component;
  let fixture: ComponentFixture<Ambiente2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ambiente2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ambiente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
