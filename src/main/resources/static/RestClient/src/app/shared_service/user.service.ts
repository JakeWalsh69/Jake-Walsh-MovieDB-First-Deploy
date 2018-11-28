import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable()
export class UserService {
  private baseUrl:string='http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.baseUrl+'/users').subscribe(data => {
      console.log(data)
    });
  }

  getMoviesByKeyword(keyword : string){
    return this.http.get('https://api.themoviedb.org/3/search/movie?query=' + keyword + '&api_key=383b0d4a4c7c80d01138a5ad8902b121')
    .subscribe(data => {
      console.log(data)
    });
  }

}
