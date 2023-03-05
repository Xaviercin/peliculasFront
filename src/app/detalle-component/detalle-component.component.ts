import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-detalle-component',
  templateUrl: './detalle-component.component.html',
  styleUrls: ['./detalle-component.component.css']
})
export class DetalleComponentComponent{
  movieName: string = "";
  releaseDate: string = "";
  movieDescription: string = "";
  movieLanguage: string = "";
  movieDirector: string = "";
  movieDuration: string = "";
  movieGenre: string = "";

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) { }
  async ngOnInit(): Promise<void> {
    const data = await fetch("http://www.omdbapi.com/?apikey=fe9044ff&i="+ this.getId()).then(res => res.json())
    this.movieName = data.Title;
    this.releaseDate = data.Released;
    this.movieDescription = data.Plot;
    this.movieLanguage = data.Language;
    this.movieDirector = data.Director;
    this.movieDuration = data.Runtime;
    this.movieGenre = data.Genre;
  }
  getId(): any {
    return this.route.snapshot.paramMap.get('movieId');
  }
  goBack(): void{
    this.location.back()
  }
}
