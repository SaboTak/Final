import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaListComponent } from './incidencia-list.component';

describe('IncidenciaListComponent', () => {
  let component: IncidenciaListComponent;
  let fixture: ComponentFixture<IncidenciaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
