import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './pages/app.component.html',
  styleUrls: ['./css/app.component.css']
})

export class AppComponent {
  
  id: string = "";
  keyword: string = "";
  response: any;
  require: any;
  data: any;
  leo: any;
  fullname: any;
  fname: any;
  lname: any;
  genre: any;
  constructor(private http: HttpClient){

  }

  ngOnInit() {
    this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=383b0d4a4c7c80d01138a5ad8902b121&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    .subscribe((data) => {
      this.data = data;

      JSON.stringify(data);

      console.log(data);
    })
  }

  searchById() {
    this.http.get('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=383b0d4a4c7c80d01138a5ad8902b121')
    .subscribe((response) => {
        this.response = response;
        console.log(this.response);
    })
  }

  searchByIdEnglish() {
    this.http.get('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=383b0d4a4c7c80d01138a5ad8902b121&language=en-US')
    .subscribe((response) => {
        this.response = response;
        console.log(this.response);
    })
  }

  searchByIdFrench() {
    this.http.get('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=383b0d4a4c7c80d01138a5ad8902b121&language=fr')
    .subscribe((response) => {
        this.response = response;
        console.log(this.response);
    })
  }

  searchByIdGerman() {
    this.http.get('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=383b0d4a4c7c80d01138a5ad8902b121&language=de')
    .subscribe((response) => {
        this.response = response;
        console.log(this.response);
    })
  }

  searchByIdSpanish() {
    this.http.get('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=383b0d4a4c7c80d01138a5ad8902b121&language=es')
    .subscribe((response) => {
        this.response = response;
        console.log(this.response);
    })
  }

  searchByIdItalian() {
    this.http.get('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=383b0d4a4c7c80d01138a5ad8902b121&language=it')
    .subscribe((response) => {
        this.response = response;
        console.log(this.response);
    })
  }

  searchByKeyword() {
    this.http.get('https://api.themoviedb.org/3/search/movie?query=' + this.keyword + '&api_key=383b0d4a4c7c80d01138a5ad8902b121?query=horror')
    .subscribe((data) => {
      this.data = data;

      JSON.stringify(data);

      console.log(data)
    });

    this.http.get('https://api.themoviedb.org/3/movie/' + this.data.response.id + '?api_key=383b0d4a4c7c80d01138a5ad8902b121')
    .subscribe((response) => {
        this.response = response;

        JSON.stringify(response);

        console.log(this.response);
    });
  }

  searchByKeywordInEnglish(){
    this.http.get('https://api.themoviedb.org/3/search/movie?query=' + this.keyword + '&api_key=383b0d4a4c7c80d01138a5ad8902b121&language=en-US')
    .subscribe((data) => {
      this.data = data;

      JSON.stringify(data);

      console.log(data)
    });
  }

  searchByKeywordInFrench(){
    this.http.get('https://api.themoviedb.org/3/search/movie?query=' + this.keyword + '&api_key=383b0d4a4c7c80d01138a5ad8902b121&language=fr')
    .subscribe((data) => {
      this.data = data;

      JSON.stringify(data);

      console.log(data)
    });
  }

  searchByKeywordInGerman(){
    this.http.get('https://api.themoviedb.org/3/search/movie?query=' + this.keyword + '&api_key=383b0d4a4c7c80d01138a5ad8902b121&language=de')
    .subscribe((data) => {
      this.data = data;

      JSON.stringify(data);

      console.log(data)
    });
  }

  searchByKeywordInSpanish(){
    this.http.get('https://api.themoviedb.org/3/search/movie?query=' + this.keyword + '&api_key=383b0d4a4c7c80d01138a5ad8902b121&language=es')
    .subscribe((data) => {
      this.data = data;

      JSON.stringify(data);

      console.log(data)
    });
  }

  searchByKeywordInItalian(){
    this.http.get('https://api.themoviedb.org/3/search/movie?query=' + this.keyword + '&api_key=383b0d4a4c7c80d01138a5ad8902b121&language=it')
    .subscribe((data) => {
      this.data = data;

      JSON.stringify(data);

      console.log(data)
    });
  }

  mostPopularMovies(){
    this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=383b0d4a4c7c80d01138a5ad8902b121&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    .subscribe((data) => {
      this.data = data;

      JSON.stringify(data);

      console.log(data);
    })
  }

  mostPopularMoviesInEnglish(){
    this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=383b0d4a4c7c80d01138a5ad8902b121&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    .subscribe((data) => {
      this.data = data;

      JSON.stringify(data);

      console.log(data);
    })
  }

  mostPopularMoviesInFrench(){
    this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=383b0d4a4c7c80d01138a5ad8902b121&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    .subscribe((data) => {
      this.data = data;

      JSON.stringify(data);

      console.log(data);
    })
  }

  mostPopularMoviesInGerman(){
    this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=383b0d4a4c7c80d01138a5ad8902b121&language=de&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    .subscribe((data) => {
      this.data = data;

      JSON.stringify(data);

      console.log(data);
    })
  }

  mostPopularMoviesInSpanish(){
    this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=383b0d4a4c7c80d01138a5ad8902b121&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    .subscribe((data) => {
      this.data = data;

      JSON.stringify(data);

      console.log(data);
    })
  }

  mostPopularMoviesInItalian(){
    this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=383b0d4a4c7c80d01138a5ad8902b121&language=it&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    .subscribe((data) => {
      this.data = data;

      JSON.stringify(data);

      console.log(data);
    })
  }

  searchByName(){
    this.http.get('https://api.themoviedb.org/3/search/person?api_key=383b0d4a4c7c80d01138a5ad8902b121&language=en-US&page=1&include_adult=false&search_type=ngram&query=' + this.fname + "+" + this.lname)
    .subscribe((fullname) => {
      this.fullname = fullname;

      JSON.stringify(fullname);

      console.log(fullname);
    })
  }

  searchByGenreAction(){
    this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=383b0d4a4c7c80d01138a5ad8902b121&language=en-US&sort_by=popularity.desc&with_genres=12&page=1")
    .subscribe((genre) => {
      this.genre = genre;

      JSON.stringify(genre);

      console.log(genre);
    })
  }

}
