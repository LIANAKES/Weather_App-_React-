
  export interface WeatherState {
    history: Weather []; 
    loading: boolean;
    error: string | null | undefined;
    currentWeather: Weather | null;
  }

  export interface Weather {
    id: string;
  name: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  temperature: number;
  humidity: number;
  pressure: number;
  description: string;
  icon: string;
}
  
  
  
 
  