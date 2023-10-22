import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdComponent } from './wd.component';

describe('WdComponent', () => {
  let component: WdComponent;
  let fixture: ComponentFixture<WdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WdComponent]
    });
    fixture = TestBed.createComponent(WdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
