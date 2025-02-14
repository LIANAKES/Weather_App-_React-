
export interface WeatherData {
  id: string;
  name: string;
  weather: { description: string; icon: string }[];
  main: { temp: number };
}