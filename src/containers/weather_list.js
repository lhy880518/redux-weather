import React,{ Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
  renderWeather(cityData){
    console.log(cityData);
    if(cityData !== undefined){
      const name = cityData.city.name;
      const temps = cityData.list.map(weather => weather.main.temp);
      const pressures = cityData.list.map(weather => weather.main.pressure);
      const humidities = cityData.list.map(weather => weather.main.humidity);
      /*const lon = cityData.city.coord.lon;
      const lat = cityData.city.coord.lat;*/
      const {lon, lat} = cityData.city.coord;


      return (
        <tr key={name}>
          <td width="25%"><GoogleMap lon={lon} lat={lat}/></td>
          <td width="25%"><Chart data={temps} color="orange" units="K" /></td>
          <td width="25%"><Chart data={pressures} color="green" units="hPa"/></td>
          <td width="25%"><Chart data={humidities} color="black" units="%"/></td>
        </tr>
      );
    }
  }
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
  //state.weather는 리듀서에서 weather : WeatherReducer 로 할당했기에 사용가능
  return {
    weather:state.weather
  };
}
/* es6문법
function mapStateToProps({weather}){
  //위의 표현을 이와같이 표현가능
  return {
    weather
  };
}
*/
export default connect(mapStateToProps)(WeatherList);
