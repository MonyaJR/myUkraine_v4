import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialContractComponent } from './social-contract.component';

describe('SocialContractComponent', () => {
  let component: SocialContractComponent;
  let fixture: ComponentFixture<SocialContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
