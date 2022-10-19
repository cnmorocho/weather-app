import { Component, OnInit } from '@angular/core';
import { WeatherResponse } from '../../models/ResponseApi.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  weather: WeatherResponse | undefined;

  constructor() {}

  ngOnInit(): void {
    /* this.weatherService
      .getWeatherOf('Buenos Aires')
      .subscribe((res: WeatherResponse) => (this.weather = res)); */
  }

  getSearch(res: WeatherResponse) {
    this.weather = res;
  }
}
