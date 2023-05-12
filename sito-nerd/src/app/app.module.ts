import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericComponent } from './generic/generic.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule, HttpClientModule //Aggiungi il modulo http qui 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
