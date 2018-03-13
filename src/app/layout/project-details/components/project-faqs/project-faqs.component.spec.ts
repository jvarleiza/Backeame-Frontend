import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFaqsComponent } from './project-faqs.component';

describe('ProjectFaqsComponent', () => {
  let component: ProjectFaqsComponent;
  let fixture: ComponentFixture<ProjectFaqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFaqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
