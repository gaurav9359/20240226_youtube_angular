import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideMainComponent } from './left-side-main.component';

describe('LeftSideMainComponent', () => {
  let component: LeftSideMainComponent;
  let fixture: ComponentFixture<LeftSideMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSideMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftSideMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
