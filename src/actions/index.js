import axios from 'axios';
const API_KEY = '63472c4c287a1762b93eadaa2c285018';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;



export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_CITY = 'FETCH_CITY';
//Axios는 ajax리퀘스트를 브라우저에서 만들 수 있는 라이브러리.(jquery ajax 비슷)
export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };

}

export function fetchCity(city){
  console.log(city);
  var request = [];
  if(city !== ''){
    request = [
      {id:1, name:'London'},
      {id:2, name:'New York'},
      {id:3, name:'Durango'},
      {id:4, name:'Montrose'},
      {id:5, name:'Liberal'},
      {id:6, name:'McKinley'},
      {id:7, name:'Lyon'},
      {id:8, name:'Mesquite'},
      {id:9, name:'Ector'}
    ];
  }

  return {
    type: FETCH_CITY,
    payload: request
  };
}
