import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }
  getAllPosts(keyword) {
  var key = keyword;
  var url = '/api/posts?&keyword=' + key;
    return this.http.get(url)
      .map(res => res.json());
  }
}
