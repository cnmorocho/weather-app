import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherResponse } from '../../models/ResponseApi.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() weather: EventEmitter<WeatherResponse>;

  searchBar: FormGroup;

  constructor(private weatherService: WeatherService) {
    this.searchBar = new FormGroup({});
    this.weather = new EventEmitter();
  }

  ngOnInit(): void {
    this.initForm();
    //this.searchWeatherOfCity();
  }

  initForm(): void {
    this.searchBar = new FormGroup({
      weatherCtrl: new FormControl('', Validators.min(3)),
    });
  }

  searchWeatherOfCity() {
    this.weatherService
      .getWeatherOf(this.searchBar.value['weatherCtrl'])
      .subscribe((res) => {
        this.weather.emit(res);
      });
  }
}
