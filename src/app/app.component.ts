import { Component } from '@angular/core';
import { ResponsiveNavComponent } from './components/responsive-nav/responsive-nav.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [ResponsiveNavComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	// title = 'torrent-project';
	title: string = document.title;

	constructor() {
		window.onfocus = () => {
			document.title = this.title;
		};

		window.onblur = () => {
			document.title = "Mi lesz velünk nélküled? 😭";
		}
	}
}
