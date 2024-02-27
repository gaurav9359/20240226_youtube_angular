import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleMainComponent } from './middle-main.component';

describe('MiddleMainComponent', () => {
  let component: MiddleMainComponent;
  let fixture: ComponentFixture<MiddleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiddleMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiddleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
