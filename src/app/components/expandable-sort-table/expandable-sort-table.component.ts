import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButton } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JsonPipe } from '@angular/common';


@Component({
	selector: 'app-expandable-sort-table',
	standalone: true,
	imports: [MatFormFieldModule,
		MatInputModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		MatIconModule,
		MatExpansionModule,
		MatButton,
		HttpClientModule,
		JsonPipe
	],
	animations: [
		trigger('detailExpand', [
			state('collapsed,void', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	],
	templateUrl: './expandable-sort-table.component.html',
	styleUrl: './expandable-sort-table.component.css'
})
export class ExpandableSortTableComponent implements AfterViewInit {
	movies: any[] = [];
	sortBy: string = "date_added";

	columnsToDisplay: string[] = ['id', 'title', 'year', 'rating']; // ezzel nem működik rendesen
	dataSource: MatTableDataSource<any>;
	expandedElement!: any | null;
	// columnsToDisplay: string[] = ['id', 'name', 'progress', 'fruit'];
	// dataSource: MatTableDataSource<UserData>;
	// expandedElement!: UserData | null;
	columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];

	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;

	constructor(private http: HttpClient) {
		// TODO https://github.com/nerkat/YTS-API-UI?tab=readme-ov-file

		this.fetchTorrents();
		this.dataSource = new MatTableDataSource(this.movies);
	}
	//! delete me
	fetchTorrents(query: string = "") {
		//!
		const response = this.http.get(`https://yts.mx/api/v2/list_movies.json?query_term=${query}`).subscribe((data: any) => {
			data.data.movies.forEach((movie: any) => {
				this.movies.push(movie);
			});
			
			// values should be assigned after the data is fetched
			// https://stackoverflow.com/questions/78446333/angular-mat-pagination-and-mat-sort-are-not-working
			this.dataSource.data = this.movies;
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}

	ngAfterViewInit() {
		this.dataSource.data = this.movies;
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;

		// If the user changes the sort order, reset back to the first page.
		this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	download() {
		alert("download");
	}
}
