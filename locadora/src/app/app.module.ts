import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilmesListComponent } from './components/filmes-list/filmes-list.component';
import { FilmesFormComponent } from './components/filmes-form/filmes-form.component';

//services
import { FilmesService } from './providers/filmes.service';

//models
import { Filme } from './models/filme.service';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmesListComponent,
    FilmesFormComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FilmesService, Filme],
  bootstrap: [AppComponent]
})
export class AppModule { }
