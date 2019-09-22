import { FETCH_COURSES } from '../actions/type';


export default (state = [], action) => {
    switch (action.type){
        case FETCH_COURSES:
            return {...state, coursesList: action.payload.data, current_time: action.payload.timestamp};
        default:
            return state;
    }
}