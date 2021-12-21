import moment from "moment";

const getCurrentDayForecast = (locationResponse, currentWeather) => ({
  weekday: moment(currentWeather[0].LocalObservationDateTime).format("dddd"),
  date: moment(currentWeather[0].LocalObservationDateTime).format("MMMM Do"),
  location: locationResponse.LocalizedName,
  temperature: Math.round(currentWeather[0].Temperature.Metric.Value),
  weatherIcon:
    currentWeather[0].WeatherIcon < 10
      ? `https://developer.accuweather.com/sites/default/files/0${currentWeather[0].WeatherIcon}-s.png`
      : `https://developer.accuweather.com/sites/default/files/${currentWeather[0].WeatherIcon}-s.png`,
  weatherDescription: currentWeather[0].WeatherText,
  isDayTime: currentWeather[0].IsDayTime,
  realFeelTemp: currentWeather[0].RealFeelTemperature.Metric.Value,
  humidity: currentWeather[0].RelativeHumidity,
  windSpeedKm: currentWeather[0].Wind.Speed.Metric.Value,
  pressureMb: currentWeather[0].Pressure.Metric.Value,
});

export default getCurrentDayForecast;
