import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather,fetchCity} from '../actions/index';

class CityList extends Component{
  constructor(props){
    super(props);

    this.createcity = this.createcity.bind(this);
    this.cityclick = this.cityclick.bind(this);
  }
  createcity(city){
    const cityName = city.name;
    const cityId = city.id;

    return (
      <a onClick={this.cityclick} key = {cityId} className="list-group-item" id= {cityName}>{cityName}</a>
    );
  }

  cityclick(event){
    this.props.fetchWeather(event.target.id);
    this.props.fetchCity('');
  }

  render(){
    return(
      <div className = 'list-city'>
       <div className="list-group">
         {this.props.citylist.map(this.createcity)}
       </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    citylist:state.citylist
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather,fetchCity}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
