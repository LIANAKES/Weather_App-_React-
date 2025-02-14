import { WeatherCardProps } from './types';
import { Card, WeatherIcon, DeleteButton,  Temperature, InfoCloud} from './styles';

const WeatherCard = ({ weather, onDelete }: WeatherCardProps) => {
  return (
    <Card>
      <h3>{weather.name}</h3>
      <WeatherIcon
        src={`http://openweathermap.org/img/w/${weather.icon}.png`} 
        alt={weather.description}
      />
      <Temperature>{weather.temperature}°C</Temperature>
      <InfoCloud>💧 {weather.humidity}%</InfoCloud>
      <InfoCloud>🌪 {weather.pressure} hPa</InfoCloud>
      <DeleteButton onClick={onDelete}>Delete</DeleteButton>
    </Card>
  );
};

export default WeatherCard;
