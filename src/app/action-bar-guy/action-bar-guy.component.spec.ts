import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBarGuyComponent } from './action-bar-guy.component';

describe('ActionBarGuyComponent', () => {
  let component: ActionBarGuyComponent;
  let fixture: ComponentFixture<ActionBarGuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionBarGuyComponent]
    });
    fixture = TestBed.createComponent(ActionBarGuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
