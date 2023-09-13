import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PROFILES } from '../mock-profiles';
import { ProfileService } from '../profile.service';
import { ProfileDataService } from '../profile-data.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent implements OnInit {
  profiles = PROFILES;

  constructor(
    private profileService: ProfileService,
    private profileDataService: ProfileDataService
  ) {}

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(): void {
    this.profiles = this.profileService.getProfiles();
  }

  @Output() profileSelected = new EventEmitter<any>();

  // ... other methods

  showSummary(id: number): void {
    const profile = this.profileDataService.getProfile(id);
    this.profileSelected.emit(profile);
  }
}
