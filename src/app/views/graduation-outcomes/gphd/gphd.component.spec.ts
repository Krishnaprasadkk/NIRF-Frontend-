import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GphdComponent } from './gphd.component';

describe('GphdComponent', () => {
  let component: GphdComponent;
  let fixture: ComponentFixture<GphdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GphdComponent]
    });
    fixture = TestBed.createComponent(GphdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
