import { TestBed } from '@angular/core/testing';

import { OpentelemetryConfigService } from './opentelemetry-config.service';

describe('OpentelemetryConfigService', () => {
  let service: OpentelemetryConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpentelemetryConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
