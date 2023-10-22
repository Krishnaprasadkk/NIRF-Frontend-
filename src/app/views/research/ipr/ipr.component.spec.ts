import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IprComponent } from './ipr.component';

describe('IprComponent', () => {
  let component: IprComponent;
  let fixture: ComponentFixture<IprComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IprComponent]
    });
    fixture = TestBed.createComponent(IprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
