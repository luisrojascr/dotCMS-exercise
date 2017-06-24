import { Component, OnInit } from '@angular/core'; 
import { NewsService } from '../news-list/news.service';
import { Inews } from './news';

@Component({
  selector: 'news-list',
  styleUrls: ['./news-list.component.css'],
  templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit{  

  newsList: any[];
  errorMessage: string;

  constructor(private _newsService: NewsService){

  }

  ngOnInit(): void {
    this._newsService.getNews()
       .subscribe( news => this.newsList = news, error => this.errorMessage = <any>error);
      //  .subscribe( news => this.newsList = news, error => this.errorMessage = <any>error);
  }
}
