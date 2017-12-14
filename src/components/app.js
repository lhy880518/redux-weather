import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import CityList from '../containers/city_list';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CityList />
        <WeatherList />
      </div>
    );
  }
}
