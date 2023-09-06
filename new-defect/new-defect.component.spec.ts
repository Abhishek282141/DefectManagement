import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDefectComponent } from './new-defect.component';

describe('NewDefectComponent', () => {
  let component: NewDefectComponent;
  let fixture: ComponentFixture<NewDefectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDefectComponent]
    });
    fixture = TestBed.createComponent(NewDefectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
