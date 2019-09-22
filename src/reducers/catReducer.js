import { SELECT_CAT } from '../actions/type';

export default (state = 'all', action) => {
    switch (action.type) {
        case SELECT_CAT:
            return action.payload;
        default:
            return state;
    }
}