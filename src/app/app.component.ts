import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'user-profiles';
  selectedProfile: any = null;

  onProfileSelected(profile: any): void {
    this.selectedProfile = profile;
  }
}
