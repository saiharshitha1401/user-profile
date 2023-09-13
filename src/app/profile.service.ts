// src/app/profile.service.ts
import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import { PROFILES } from './mock-profiles';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  getProfiles(): Profile[] {
    return PROFILES;
  }
}
