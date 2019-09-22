import { combineReducers } from "redux";

import timeReducer from './timeReducer';
import coursesReducer from './coursesReducer';
import catReducer from './catReducer';


export default combineReducers({
    courses: coursesReducer,
    time: timeReducer,
    category: catReducer
});
