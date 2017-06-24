import {Component} from '@angular/core';
import { NewsService } from './news-list/news.service';

//Adding NewsService to AppComponent so is available for other components
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ NewsService ]
})
export class AppComponent {

}
