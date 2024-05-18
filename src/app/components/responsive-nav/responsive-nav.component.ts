import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TorrentsComponent } from '../torrents/torrents.component';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-responsive-nav',
	templateUrl: './responsive-nav.component.html',
	styleUrl: './responsive-nav.component.css',
	standalone: true,
	imports: [
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatListModule,
		MatIconModule,
		AsyncPipe,
		RouterLink,
		RouterLinkActive,
		HomeComponent,
		TorrentsComponent,
		RouterOutlet
	]
})
export class ResponsiveNavComponent implements OnInit {
	private breakpointObserver = inject(BreakpointObserver);
	authService = inject(AuthService);

	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches),
			shareReplay()
	);

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
		});
	}

	logout(): void {
		this.authService.logout();
	}
}
