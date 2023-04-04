import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnDialogComponent } from './burn-dialog.component';

describe('BurnDialogComponent', () => {
  let component: BurnDialogComponent;
  let fixture: ComponentFixture<BurnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurnDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
