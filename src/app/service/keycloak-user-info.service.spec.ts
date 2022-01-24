import { TestBed } from '@angular/core/testing';

import { KeycloakUserInfoService } from './keycloak-user-info.service';

describe('KeycloakUserInfoService', () => {
  let service: KeycloakUserInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeycloakUserInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
