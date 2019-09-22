import { SELECT_TIME } from '../actions/type';

export default (state = 0, action) => {
    switch (action.type) {
        case SELECT_TIME:
            return action.payload;
        default:
            return state;
    }
}