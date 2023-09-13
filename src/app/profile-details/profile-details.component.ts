import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../profile.model';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {
  @Input() profile: any;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.profile = this.profileService
      .getProfiles()
      .find((profile) => profile.id === id);
  }
  showSummary(id: any): void {
    // Implement this method to handle showing the summary for the profile
    console.log('Show summary for profile with id:', id);
  }
}
