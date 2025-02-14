import { useDispatch, useSelector } from 'react-redux';
import { weatherActions } from '../../store/reduxe/weather/weatherSlice';
import { RootState } from '../../store/store';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import WeatherForm from '../../components/WeatherForm/WeatherForm';
import { Loader, ErrorMessage, HomePageWrapper, HomeContainer, LoadingText} from './styles';

function Home () {
  const dispatch = useDispatch();
  const weather = useSelector((state: RootState) => state.WEATHER.currentWeather);
  const loading = useSelector((state: RootState) => state.WEATHER.loading);
  const error = useSelector((state: RootState) => state.WEATHER.error);

  const fetchWeather = async (city: string) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    dispatch(weatherActions.setLoading(true));
    dispatch(weatherActions.setError());

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

   
      if (!response.ok) {
        throw new Error('City not found');
      }
      
      const data = await response.json();
      console.log("Weather data:", data);

      if (!data.main || !data.weather) {
        throw new Error("Invalid data structure from API");
      }

      const weatherWithId = {
        id: data.id.toString(),
        name: data.name,
        main: {
          temp: data.main.temp,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
        },
        weather: [{
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        }] as [{ description: string, icon: string }],
        temperature: data.main.temp,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      };

      dispatch(weatherActions.addWeather(weatherWithId));
      dispatch(weatherActions.addToHistory(weatherWithId));
    

    } catch (err: any) {
      dispatch(weatherActions.setError(err.message || 'Something went wrong'));
    } finally {
      dispatch(weatherActions.setLoading(false));
    }
  };

  const handleDelete = (id: string) => {
    dispatch(weatherActions.deleteWeather(id));
  };

  return (
    <HomePageWrapper>
      <HomeContainer>
        <WeatherForm onSearch={fetchWeather} /> 
        {loading && <Loader>Loading...</Loader>}
        {error ? <ErrorMessage>{error}</ErrorMessage> : weather && (
        <WeatherCard weather={weather} onDelete={() => handleDelete(weather.id)} />)}
      </HomeContainer>
      {loading && <LoadingText>Fetching the latest weather...</LoadingText>}
    </HomePageWrapper>
  );
};

export default Home;