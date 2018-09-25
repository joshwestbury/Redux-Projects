import * as key from "../api_key";
const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}id=${city}&APPID=${key}`;

    i
    return {
        type: FETCH_WEATHER
    }
}