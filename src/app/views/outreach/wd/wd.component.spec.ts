import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WDComponent } from './wd.component';

describe('WDComponent', () => {
  let component: WDComponent;
  let fixture: ComponentFixture<WDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WDComponent]
    });
    fixture = TestBed.createComponent(WDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
