import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkDiagComponent } from './network-diag.component';

describe('NetworkDiagComponent', () => {
  let component: NetworkDiagComponent;
  let fixture: ComponentFixture<NetworkDiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkDiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
