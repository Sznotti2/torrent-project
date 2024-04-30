import { Component, OnInit, inject } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeComponent } from '../home/home.component';
import { TorrentsComponent } from '../torrents/torrents.component';
import { UploadComponent } from '../upload/upload.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatTabsModule, HomeComponent, TorrentsComponent, UploadComponent, MatToolbarModule, MatButtonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
	authService = inject(AuthService);

	ngOnInit(): void {
		this.authService.user$.subscribe(user => {
			if (user) {
				this.authService.currentUserSig.set({
					email: user.email!,
					username: user.displayName!
				});
			} else {
				this.authService.currentUserSig.set(null);
			}
			console.log(this.authService.currentUserSig());
		});
	}

	logout(): void {
		this.authService.logout();
	}
}
