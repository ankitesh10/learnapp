import Axios from "axios";

import { SELECT_TIME, FETCH_COURSES, SELECT_CAT } from "./type";

export const selectTime = time => {
  return { type: SELECT_TIME, payload: time };
};

export const selectCategory = cat => {
  return { type: SELECT_CAT, payload: cat };
};

export const fetchCourses = () => async dispatch => {
  const response = await Axios.get(
    "https://cors-anywhere.herokuapp.com/http://dev-api.learnapp.co/webinars"
  );

  dispatch({ type: FETCH_COURSES, payload: response.data });
};
