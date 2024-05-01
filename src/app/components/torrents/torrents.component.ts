import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-torrents',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './torrents.component.html',
  styleUrl: './torrents.component.css'
})
export class TorrentsComponent implements OnInit {

	httpClient = inject(HttpClient);
	data: any[] = [];


	ngOnInit(): void {
		this.fetchData();
	}

	fetchData(): void {
		// this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
		// 	console.log(data);
		// 	this.data = data;
		// });

		this.httpClient.get('https://1337xto/api/v1/search?site=1337x&query=avengers').subscribe((data: any) => {
			console.log(data);
			this.data = data;
		});
	}
}
// api/v1/search?site=1337x&query=avengers