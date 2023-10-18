import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsComponent } from './ss.component';

describe('SsComponent', () => {
  let component: SsComponent;
  let fixture: ComponentFixture<SsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SsComponent]
    });
    fixture = TestBed.createComponent(SsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
