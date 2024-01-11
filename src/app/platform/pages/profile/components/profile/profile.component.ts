import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/platform/interfaces/user.interface';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { UiService } from 'src/app/platform/services/ui.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(
    private profileService: ProfileService,
    private uiService: UiService
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  ngOnInit(): void {
  }

  async updateProfile(fProfile: NgForm) {
    await this.uiService.setLoading();
    const user = await this.profileService.updateProfile(this.user.id, fProfile.value);
    localStorage.setItem('user', JSON.stringify(user));
    await this.uiService.setLoading();
  }

}
