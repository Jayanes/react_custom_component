import { CHANGE_TITLE_COLOR } from '../actions/types';

const INITIAL_STATE = {
    titleColor: 'red'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_TITLE_COLOR :
            return  {
                ...state,
                titleColor: action.payload.data
            }
        default :
            return state;
    }
}