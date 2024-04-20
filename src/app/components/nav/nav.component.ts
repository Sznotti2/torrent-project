import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeComponent } from '../home/home.component';
import { TorrentsComponent } from '../torrents/torrents.component';
import { UploadComponent } from '../upload/upload.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatTabsModule, HomeComponent, TorrentsComponent, UploadComponent, MatToolbarModule, MatButtonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
