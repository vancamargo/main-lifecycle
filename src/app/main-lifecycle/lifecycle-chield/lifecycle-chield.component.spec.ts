import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleChieldComponent } from './lifecycle-chield.component';

describe('LifecycleChieldComponent', () => {
  let component: LifecycleChieldComponent;
  let fixture: ComponentFixture<LifecycleChieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleChieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleChieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
