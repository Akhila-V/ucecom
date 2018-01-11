import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class QuizService {
	
	constructor(private http: Http) {
		
	}

	private setHeaders() : Headers {
		const headerConfig = {
			'Content-type': 'application/json',
			'Accept': 'application/json'
		};

		return new Headers(headerConfig);
	}

	private formatErrors(error: any) {
     return Observable.throw(error.json());
  }

	get(path: string, params: URLSearchParams = new URLSearchParams()) : Observable<any> {
		return this.http.get(`${path}`, {headers: this.setHeaders(), search: params})
		.catch(this.formatErrors)
		.map((res: Response) => res.json());
	}
}