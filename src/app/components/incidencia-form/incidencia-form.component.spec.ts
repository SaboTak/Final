import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaFormComponent } from './incidencia-form.component';

describe('IncidenciaFormComponent', () => {
  let component: IncidenciaFormComponent;
  let fixture: ComponentFixture<IncidenciaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
