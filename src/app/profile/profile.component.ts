import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../profile.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() profile: Profile | undefined;

  constructor() {}

  ngOnInit(): void {}
}
