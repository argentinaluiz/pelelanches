import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeleItemComponent } from './pele-item.component';

describe('PeleItemComponent', () => {
  let component: PeleItemComponent;
  let fixture: ComponentFixture<PeleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
