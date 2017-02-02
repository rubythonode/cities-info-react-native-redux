import { POP_ROUTE, PUSH_ROUTE, ADD_CITY, ADD_CITY_INFO, ADD_CITY_WEATHER, SET_SPINNER_STATE, OPEN_CITY_DETAIL, SET_CITY_DETAIL} from '../constants/ActionTypes'

export function push (route) {
  return {
    type: PUSH_ROUTE,
    route
  }
}

export function pop () {
  return {
    type: POP_ROUTE
  }
}

export const addCity = (city) => ({
  type: ADD_CITY,
  city
})

export const addWeatherInfo = (name, id, cityWeatherId, weather) => ({
  type: ADD_CITY_WEATHER,
  weather: weather,
  cityWeatherId,
  name,
  id
})

export const openCityDetail = (city) => ({
  type: OPEN_CITY_DETAIL,
  city
})

export const addCityInfo = (cityInfoId, id, location, address) => ({
  type: ADD_CITY_INFO,
  cityInfoId,
  id,
  location,
  address
})

export const setSpinnerState = (spinnerState) => ({
  type: SET_SPINNER_STATE,
  spinnerState
})

//TODO This index is to simulate a relationship of city data
let cityIds = 0;
let cityWeatherIds = 0;
let cityInfoIds = 0;

export const onCitySelected = (city) => {
    return (dispatch)=>{
        dispatch(setSpinnerState(true));
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city.name}&key=AIzaSyCjLJYPW9ebsH5Rps2ofoaHd39TVycnxHk`)
        .then(response => response.json())
        .then((json) =>{
            //dispatch(setSelectedCityDetail({'location': json.results[0].geometry.location, 'address': json.results[0].formatted_address}))
            dispatch(openCityDetail({city: city.id}));
            dispatch(addCityInfo(cityInfoIds, city.id, json.results[0].geometry.location, json.results[0].formatted_address));
            dispatch(setSpinnerState(false));
            cityInfoIds++;
            dispatch(push({'key': 'cityDetail'}));
        })
    }
}

export const getCityInfo = (city) => {
    return (dispatch)=>{
        dispatch(setSpinnerState(true));
        fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=sFMTJmKWAXGp9GcbKcM8tIoXspyeBHMA&q=${city}&language=es`)
            .then(response => response.json())
            .then((json) =>{
                if(json[0] && json[0].Key){
                    fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${json[0].Key}?apikey=sFMTJmKWAXGp9GcbKcM8tIoXspyeBHMA&language=es`)
                    .then(response => response.json())
                    .then((weatherInfo) =>{
                        dispatch(setSpinnerState(false));
                        dispatch(addWeatherInfo(city, cityIds, cityWeatherIds, weatherInfo));
                        cityIds++;
                        cityWeatherIds++;
                    })
                }else{
                    dispatch(setSpinnerState(false));
                    dispatch(addCity('NOT FOUND CITY', {}));
                }
            })
    }
}
