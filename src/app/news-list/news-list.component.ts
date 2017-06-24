import { Component, OnInit } from '@angular/core'; 
import { NewsService } from '../news-list/news.service';
import { ENV } from '../config/environment.config';

@Component({
  selector: 'news-list',
  styleUrls: ['./news-list.component.css'],
  templateUrl: './news-list.component.html'
})
export class NewsListComponent implements OnInit{  

  newsList: any[];
  selectedNews: any[];
  errorMessage: string;

  constructor(private _newsService: NewsService){
    this.newsList = [];
  }

  //Subscribe to the Observable response 
  //onInit lifecycle hook so it's available when the component loads
  ngOnInit(): void {
    this._newsService.getNews()
       .subscribe( news => {
          //Get news json by accesing contentlets object
          this.newsList = news['contentlets'];
          // Going through the json files and getting the thumbnails
          for (let i = 0; i < this.newsList.length; i ++) {
              this.newsList[i].thumbUrl = ENV.SERVER_URL + ENV.THUMBNAIL_URL + this.newsList[i].imageContentAsset;
              this.newsList[i].imageUrl = ENV.SERVER_URL+ this.newsList[i].image.substring(1);
              this.newsList[i].selected = (i === 0) ? true : false;
          }
          //Select first news by default
          this.selectedNews = this.newsList[0];  
       }, error => this.errorMessage = <any>error);
  }

  //Select news on click 
  public viewNews(item) {
      for (let i = 0; i < this.newsList.length; i++) {
          this.newsList[i].selected = false;
      }
      item.selected = true;
      this.selectedNews = item;
  }
}
