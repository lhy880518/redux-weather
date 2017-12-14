import { FETCH_CITY } from '../actions/index';

//push로 하게되면 원본이 변경되니
//state.concat을 사용하여 기존 정보를 복사하여 새로운 배열을 반환

export default function(state = [], action){
  switch (action.type) {
    case FETCH_CITY:
    return [ ...action.payload ];
  }
  return state;
}
