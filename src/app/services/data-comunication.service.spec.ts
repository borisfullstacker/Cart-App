import { TestBed } from '@angular/core/testing';

import { DataComunicationService } from './data-comunication.service';

describe('DataComunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataComunicationService = TestBed.get(DataComunicationService);
    expect(service).toBeTruthy();
  });
});
