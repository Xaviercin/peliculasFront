import { Component} from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moviesApp';
  moviesArray: any[] = [];
  constructor(
    public route: ActivatedRoute,
    private location: Location
  ) { }
  async searchClick(value: string){
    await fetch("http://www.omdbapi.com/?apikey=fe9044ff&s="+ value).then(res => res.json()).then(data => this.moviesArray = data.Search);
    }
}
