import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedMainComponent } from './recommended-main.component';

describe('RecommendedMainComponent', () => {
  let component: RecommendedMainComponent;
  let fixture: ComponentFixture<RecommendedMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendedMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
