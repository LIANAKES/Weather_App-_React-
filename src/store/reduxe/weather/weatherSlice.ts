import { createAppSlice } from '../../createAppSlice';
import { WeatherState, Weather } from './types'; 
import { v4 as uuidv4 } from 'uuid';

const weatherInitialState: WeatherState = {
  currentWeather: null,
  history: [],  
  error: undefined, 
  loading: false,  
};

export const weatherSlice = createAppSlice({
  name: 'WEATHER',
  initialState: weatherInitialState,
  reducers: create => ({
    setLoading: create.reducer((state: WeatherState, action: { payload: boolean }) => {
      state.loading = action.payload;
    }),
    
    setError: create.reducer((state: WeatherState, action: { payload: string | undefined }) => {
      state.error = action.payload;
    }),

    addWeather: create.reducer((state: WeatherState, action: { payload: Weather }) => {
      state.currentWeather = action.payload;
    }),

    deleteWeather: create.reducer((state: WeatherState, action: { payload: string }) => {
      state.history = state.history.filter(w => w.id !== action.payload);
    }),

    clearHistory: create.reducer((state: WeatherState) => {
      state.history = [];
    }),

    addToHistory: create.reducer((state: WeatherState, action: { payload: Weather }) => {
      state.history.push({ ...action.payload, id: uuidv4() });
    }),
  }),
});

export const weatherActions = weatherSlice.actions;
export const weatherSelectors = weatherSlice.selectors;