import ToggleReducer from "./ToggleReducer";
import MoviesReducer from "./MoviesReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    // searchParams: ToggleReducer,
    moviesData: MoviesReducer
});

export default allReducers;