import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdComponent } from './rd.component';

describe('RdComponent', () => {
  let component: RdComponent;
  let fixture: ComponentFixture<RdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RdComponent]
    });
    fixture = TestBed.createComponent(RdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
