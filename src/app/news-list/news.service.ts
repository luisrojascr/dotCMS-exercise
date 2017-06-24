import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Inews } from './news';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class NewsService {
    
    //private _newsUrl = 'api/news.json';
    private _newsUrl = 'https://demo.dotcms.com/api/content/render/false/type/json/query/+contentType:News%20+(conhost:48190c8c-42c4-46af-8d1a-0cd5db894797%20conhost:SYSTEM_HOST)%20+languageId:1%20+deleted:false%20+working:true/orderby/News.sysPublishDate%20desc';
    
    constructor( private _http: Http ){

    }

    //Using observables to get a response from the API
    getNews(): Observable<any[]> {
        return this._http.get( this._newsUrl )
            .map( (response: Response) => <any[]> response.json() )
            .do( data => console.log('All: ' + JSON.stringify(data)) )
            .catch( this.handleError );  
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}