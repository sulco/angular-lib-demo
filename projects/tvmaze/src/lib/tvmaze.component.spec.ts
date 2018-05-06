import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvmazeComponent } from './tvmaze.component';

describe('TvmazeComponent', () => {
  let component: TvmazeComponent;
  let fixture: ComponentFixture<TvmazeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvmazeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvmazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
