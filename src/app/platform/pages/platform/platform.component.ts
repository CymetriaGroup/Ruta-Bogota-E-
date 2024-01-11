import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

  user!: User;
  isLoading: boolean = false;

  constructor(
    private uiService: UiService
  ) {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  ngOnInit(): void {
    this.uiService.loadingListener.subscribe(isLoading => {
      this.isLoading = isLoading
    });
  }

}
