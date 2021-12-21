import axios from "axios";
import { useState } from "react";

import getCurrentDayForecast from "../helpers/getCurrentDayForecast";
import getUpcomingDaysForecast from "../helpers/getUpcomingDaysForecast";

const BASE_URL = "http://dataservice.accuweather.com";

export const useForecast = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getLocationKey = async (location) => {
    const API_URL = `${BASE_URL}/locations/v1/search?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&q=${location}`;

    if (!location || location.lenght === 0) {
      setError("Please type a location!");
      setIsPending(false);
      return;
    }

    const res = await axios.get(API_URL);

    if (!res.data || res.data.length === 0) {
      setError("Location does not exist, please try a different one!");
      setIsPending(false);
      return null;
    }

    return res.data[0];
  };

  const getForecast = async (locationKey) => {
    const API_URL = `${BASE_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&metric=true`;

    const res = await axios.get(API_URL);

    if (!res.data || res.data.length === 0) {
      setError("Something went wrong!");
      setIsPending(false);
      return;
    }

    return res.data;
  };

  const getCurrentWeather = async (locationKey) => {
    const API_URL = `${BASE_URL}/currentconditions/v1/${locationKey}?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&details=true`;

    const res = await axios.get(API_URL);

    if (!res.data || res.data.length === 0) {
      setError("Something went wrong!");
      setIsPending(false);
      return;
    }

    return res.data;
  };

  const gatherForecastData = (forecast, currentWeather, locationResponse) => {
    const currentDayForecast = getCurrentDayForecast(
      locationResponse,
      currentWeather
    );
    const upcomingDaysForecast = getUpcomingDaysForecast(forecast);

    setForecast({ currentDayForecast, upcomingDaysForecast });
    setIsPending(false);
  };

  const submitRequest = async (location) => {
    setIsPending(true);
    setError(null);

    const locationResponse = await getLocationKey(location);
    if (!locationResponse?.Key) return;

    const forecast = await getForecast(locationResponse.Key);
    const currentWeather = await getCurrentWeather(locationResponse.Key);

    gatherForecastData(forecast, currentWeather, locationResponse);
  };

  return {
    error,
    isPending,
    submitRequest,
    forecast,
  };
};
