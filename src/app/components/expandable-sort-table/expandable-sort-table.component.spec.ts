import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableSortTableComponent } from './expandable-sort-table.component';

describe('ExpandableSortTableComponent', () => {
  let component: ExpandableSortTableComponent;
  let fixture: ComponentFixture<ExpandableSortTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandableSortTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpandableSortTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
