import { useDispatch, useSelector } from 'react-redux';
import { weatherActions } from '../../store/reduxe/weather/weatherSlice';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { RootState } from '../../store/store';
import { HistoryContainer, CardsContainer, ClearButton } from './styles';

function History () {
  const weatherHistory = useSelector((state: RootState) => state.WEATHER.history);
  const dispatch = useDispatch();

  // Функция для удаления карточки по ID
  const handleDelete = (id: string) => {
    dispatch(weatherActions.deleteWeather(id));
  };

  // Функция для очистки всей истории
  const handleClearHistory = () => {
    dispatch(weatherActions.clearHistory());
  };

  return (
    <HistoryContainer>
      <CardsContainer>
        {weatherHistory.map((weather) => (
          <WeatherCard
            key={weather.id}
            weather={weather}
            onDelete={() => handleDelete(weather.id)}
          />
        ))}
      </CardsContainer>
      {weatherHistory.length > 0 && (
        <ClearButton onClick={handleClearHistory}>
          Delete all cards
        </ClearButton>
      )}
    </HistoryContainer>
  );
};

export default History;
