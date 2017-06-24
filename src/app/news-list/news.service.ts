import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Inews } from './news';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class NewsService {
    
    private _newsUrl = 'api/news.json';
    //private _newsUrl = 'https://demo.dotcms.com/api/content/render/false/type/json/query/+contentType:News';
    
    constructor( private _http: Http ){

    }

    getNews(): Observable<any[]> {
        return this._http.get( this._newsUrl )
            .map( (response: Response) => <any[]> response.json() )
            // .do( data => console.log('All: ' + JSON.stringify(data)) )
            .catch( this.handleError );  
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}