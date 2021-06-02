import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDialogInformationsComponent } from './start-dialog-informations.component';

describe('StartDialogInformationsComponent', () => {
  let component: StartDialogInformationsComponent;
  let fixture: ComponentFixture<StartDialogInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartDialogInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartDialogInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
