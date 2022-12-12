import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngestionQueuesComponent } from './ingestion-queues.component';

describe('IngestionQueuesComponent', () => {
  let component: IngestionQueuesComponent;
  let fixture: ComponentFixture<IngestionQueuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngestionQueuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngestionQueuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
