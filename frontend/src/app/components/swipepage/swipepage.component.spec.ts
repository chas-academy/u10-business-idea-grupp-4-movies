import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipepageComponent } from './swipepage.component';

describe('SwipepageComponent', () => {
  let component: SwipepageComponent;
  let fixture: ComponentFixture<SwipepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
