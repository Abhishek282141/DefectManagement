import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectListComponent } from './defect-list.component';

describe('DefectListComponent', () => {
  let component: DefectListComponent;
  let fixture: ComponentFixture<DefectListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefectListComponent]
    });
    fixture = TestBed.createComponent(DefectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
