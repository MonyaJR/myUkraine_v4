import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternaTvComponent } from './alterna-tv.component';

describe('AlternaTvComponent', () => {
  let component: AlternaTvComponent;
  let fixture: ComponentFixture<AlternaTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternaTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternaTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
