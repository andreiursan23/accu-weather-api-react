import axios from "axios";

const BASE_URL = "http://dataservice.accuweather.com";

export const useIpLocation = () => {
  const getUserIp = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");

    if (!res || res.length === 0) {
      return;
    }

    return res.data.IPv4;
  };

  const getCurrentLocationKey = async (ip) => {
    const API_URL = `${BASE_URL}/locations/v1/cities/ipaddress?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&q=${ip}`;

    const res = await axios.get(API_URL);

    if (!res || res.length === 0) {
      return;
    }

    return res.data.LocalizedName;
  };

  const getCurrentLocation = async () => {
    const ip = await getUserIp();
    const locationKey = await getCurrentLocationKey(ip);

    return locationKey;
  };

  return {
    getCurrentLocation,
  };
};
