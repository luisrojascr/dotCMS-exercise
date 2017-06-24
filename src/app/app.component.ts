import {Component} from '@angular/core';
import { NewsService } from './news-list/news.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ NewsService ]
})
export class AppComponent {

}
