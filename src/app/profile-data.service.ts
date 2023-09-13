import { Injectable } from '@angular/core';
import { PROFILES } from './mock-profiles';

@Injectable({
  providedIn: 'root',
})
export class ProfileDataService {
  private profiles = PROFILES;

  constructor() {}

  getProfiles() {
    return this.profiles;
  }

  getProfile(id: number) {
    return this.profiles.find((profile) => profile.id === id);
  }
}
