import { CHANGE_TITLE_COLOR } from './types';

export const changeTitleColor = (color) => {
    return {
        type: CHANGE_TITLE_COLOR,
        payload: {
            data: color
        }
    }
}