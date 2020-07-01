import ToggleReducer from "./ToggleReducer";
import CounterReducer from "./CounterReducer";
import MoviesReducer from "./MoviesReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    CounterReducer,
    ToggleReducer,
    MoviesReducer
});

export default allReducers;