import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersecmapComponent } from './persecmap.component';

describe('PersecmapComponent', () => {
  let component: PersecmapComponent;
  let fixture: ComponentFixture<PersecmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersecmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersecmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
