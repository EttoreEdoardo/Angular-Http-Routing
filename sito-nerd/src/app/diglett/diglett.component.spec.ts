import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiglettComponent } from './diglett.component';

describe('DiglettComponent', () => {
  let component: DiglettComponent;
  let fixture: ComponentFixture<DiglettComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiglettComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiglettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
