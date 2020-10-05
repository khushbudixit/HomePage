import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentformComponent } from './agentform.component';

describe('AgentformComponent', () => {
  let component: AgentformComponent;
  let fixture: ComponentFixture<AgentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
