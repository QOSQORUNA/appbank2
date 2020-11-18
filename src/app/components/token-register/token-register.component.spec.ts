import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenRegisterComponent } from './token-register.component';

describe('TokenRegisterComponent', () => {
  let component: TokenRegisterComponent;
  let fixture: ComponentFixture<TokenRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
