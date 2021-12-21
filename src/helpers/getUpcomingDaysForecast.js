import moment from "moment";

const getWeekday = (date) => moment(date).format("dddd");

const getUpcomingDaysForecast = (forecast) => {
  const dailyForecast = [];

  forecast.DailyForecasts.map((day) => {
    return dailyForecast.push({
      weekday: getWeekday(day.Date),
      minTemperature: day.Temperature.Minimum.Value,
      maxTemperature: day.Temperature.Maximum.Value,
      imgUrl:
        day.Day.Icon < 9
          ? `https://developer.accuweather.com/sites/default/files/0${day.Day.Icon}-s.png`
          : `https://developer.accuweather.com/sites/default/files/${day.Day.Icon}-s.png`,
      description: day.Day.IconPhrase,
    });
  });

  return dailyForecast;
};

export default getUpcomingDaysForecast;
