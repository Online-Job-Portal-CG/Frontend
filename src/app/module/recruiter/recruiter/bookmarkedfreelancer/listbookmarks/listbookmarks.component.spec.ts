import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbookmarksComponent } from './listbookmarks.component';

describe('ListbookmarksComponent', () => {
  let component: ListbookmarksComponent;
  let fixture: ComponentFixture<ListbookmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbookmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
