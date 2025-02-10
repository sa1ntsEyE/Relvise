import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCookiesComponent } from './pop-up-cookies.component';

describe('PopUpCookiesComponent', () => {
  let component: PopUpCookiesComponent;
  let fixture: ComponentFixture<PopUpCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopUpCookiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
