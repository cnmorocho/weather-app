import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherForecastComponent } from './core/components/weather-forecast/weather-forecast.component';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { SearchBarComponent } from './core/components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    HomePageComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
