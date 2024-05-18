import { Component } from '@angular/core';
import { ReversePipe } from '../../shared/pipes/reverse.pipe';
import { CamelizePipe } from '../../shared/pipes/camelize.pipe';
import { ShortenPipe } from '../../shared/pipes/shorten.pipe';
import { MatCardModule } from '@angular/material/card';
import { HighlightDirective } from '../../attr.directives/highlight.directive';
import { TextColorDirective } from '../../attr.directives/text-color.directive';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReversePipe, CamelizePipe, ShortenPipe, MatCardModule, MatDividerModule, HighlightDirective, TextColorDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dummy_text: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo a mauris posuere gravida. Vestibulum sed lorem id nisl consequat commodo. Nunc tincidunt lorem eu vulputate iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque cursus laoreet imperdiet.";
}
