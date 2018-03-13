import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIconsComponent } from './app-icons.component';

describe('AppIconsComponent', () => {
  let component: AppIconsComponent;
  let fixture: ComponentFixture<AppIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
