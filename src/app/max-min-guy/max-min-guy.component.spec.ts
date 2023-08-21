import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxMinGuyComponent } from './max-min-guy.component';

describe('MaxMinGuyComponent', () => {
  let component: MaxMinGuyComponent;
  let fixture: ComponentFixture<MaxMinGuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaxMinGuyComponent]
    });
    fixture = TestBed.createComponent(MaxMinGuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
