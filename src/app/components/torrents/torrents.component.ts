import { Component } from '@angular/core';
import { ExpandableSortTableComponent } from '../expandable-sort-table/expandable-sort-table.component';

@Component({
  selector: 'app-torrents',
  standalone: true,
  imports: [ExpandableSortTableComponent],
  templateUrl: './torrents.component.html',
  styleUrl: './torrents.component.css'
})
export class TorrentsComponent {

}
// api/v1/search?site=1337x&query=avengers