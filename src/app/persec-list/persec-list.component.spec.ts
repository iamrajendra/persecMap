import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersecListComponent } from './persec-list.component';

describe('PersecListComponent', () => {
  let component: PersecListComponent;
  let fixture: ComponentFixture<PersecListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersecListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersecListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
