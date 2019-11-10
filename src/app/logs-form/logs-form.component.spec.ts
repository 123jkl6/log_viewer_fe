import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsFormComponent } from './logs-form.component';

describe('LogsFormComponent', () => {
  let component: LogsFormComponent;
  let fixture: ComponentFixture<LogsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
