import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/ResponseApi.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private url = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  public getWeatherOf(city: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(
      `${this.url}?q=${city.replace(' ', '+')}&units=metric&appid=${
        environment.token
      }`
    );
  }
}
