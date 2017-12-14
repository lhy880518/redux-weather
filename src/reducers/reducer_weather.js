import { FETCH_WEATHER } from '../actions/index';

//push로 하게되면 원본이 변경되니
//state.concat을 사용하여 기존 정보를 복사하여 새로운 배열을 반환

export default function(state = [], action){
  switch (action.type) {
    case FETCH_WEATHER:
    return [ action.payload.data, ...state]; // [city,city,city] not [city,[city,city]]
    //return state.concat([action.payload.data]);
    // es6문법
    //return [ action.payload.data, ...state];
  }
  return state;
}
