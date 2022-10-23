import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the author on display', () => {
    expect(component.author).toBeTruthy();
  });

  it('should have the title on display', () => {
    expect(component.title).toBeTruthy();
  });

  it('should have the author and title as string values', () => {
    expect(typeof component.author).toBe('string');
    expect(typeof component.title).toBe('string');
  });

  it('should display the correct title of the application', () => {
    expect(component.title).toBe('mflix');
  })

});
