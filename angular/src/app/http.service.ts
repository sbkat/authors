import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  all() {
    return this._http.get('/api/authors');
  }

  one(id) {
    return this._http.get('/api/authors/' + id);
  }

  add(newAuthor) {
    return this._http.post('/api/author', newAuthor);
  }

  edit(id, editAuthor) {
    return this._http.put('/api/authors/' + id, editAuthor);
  }

  delete(id) {
    return this._http.delete('/api/authors/' + id);
  }

}
