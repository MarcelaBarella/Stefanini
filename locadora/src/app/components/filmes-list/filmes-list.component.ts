import { Component, OnInit } from '@angular/core';
import { FilmesService } from "app/providers/filmes.service";
import { Filme } from 'app/models/filme.service';

@Component({
  selector: 'app-filmes-list',
  templateUrl: './filmes-list.component.html',
  styleUrls: ['./filmes-list.component.css']
})
export class FilmesListComponent implements OnInit {

  
  constructor(public filmesService: FilmesService) { 
    this.filmesService = filmesService;
  }

  sucesso: boolean = false;
  filmes: Filme[];
  ngOnInit() {
    this.filmesService.getFilmes().subscribe((filmes) => {
      this.filmes = filmes;
    })
  }
  enviar(): void{
    this.sucesso = true;
  }

  debug(): string{
    return JSON.stringify(this.filmesService);
  }

}