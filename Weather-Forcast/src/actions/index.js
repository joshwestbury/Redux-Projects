import { API_KEY } from "../../api_key";
import * as axios from "axios";

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}q=${city},us&APPID=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
