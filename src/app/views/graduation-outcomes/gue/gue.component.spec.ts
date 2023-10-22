import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GueComponent } from './gue.component';

describe('GueComponent', () => {
  let component: GueComponent;
  let fixture: ComponentFixture<GueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GueComponent]
    });
    fixture = TestBed.createComponent(GueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
