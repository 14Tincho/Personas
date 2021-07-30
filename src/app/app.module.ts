import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaComponent } from './components/persona/persona.component';
import { GaleriaDeImagenesComponent } from './components/galeria-de-imagenes/galeria-de-imagenes.component';

import { PersonaService } from './services/persona.service';
import { ImagesService } from './services/images.service';
import { FilterimagesPipe } from './filterimages.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    GaleriaDeImagenesComponent,
    FilterimagesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [PersonaService, ImagesService, FilterimagesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
