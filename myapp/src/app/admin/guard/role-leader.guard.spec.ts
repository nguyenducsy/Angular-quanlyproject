import { TestBed } from '@angular/core/testing';

import { RoleLeaderGuard } from './role-leader.guard';

describe('RoleLeaderGuard', () => {
  let guard: RoleLeaderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleLeaderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
