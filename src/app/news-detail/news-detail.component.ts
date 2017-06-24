import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { NewsService } from '../news-list/news.service';

@Component({ 
  styleUrls: ['./news-detail.component.css'],
  templateUrl: './news-detail.component.html'
})
export class NewsDetailComponent implements OnInit, OnDestroy {

  pageTitle: string = 'News ';
  errorMessage: string;
  news: any[];
  private sub: Subscription;

  constructor(private _route: ActivatedRoute, private _newsService: NewsService){

  }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      params => {
        let id = params['id'];
        //this.getNews(id); 
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }

  //Not Working

  // getNews(id: string) {
  //   this._newsService.getNews(id).subscribe(
  //     news => this.news = news,
  //     error => this.errorMessage = <any>error
  //   );
  // }
}

