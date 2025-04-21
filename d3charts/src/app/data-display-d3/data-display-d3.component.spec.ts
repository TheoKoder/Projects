import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDisplayD3Component } from './data-display-d3.component';

describe('DataDisplayD3Component', () => {
  let component: DataDisplayD3Component;
  let fixture: ComponentFixture<DataDisplayD3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataDisplayD3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDisplayD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
