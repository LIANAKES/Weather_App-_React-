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

  export interface WeatherCardProps {
    weather: Weather;
    onDelete: () => void;
  }