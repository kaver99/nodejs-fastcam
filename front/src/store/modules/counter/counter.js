import { createAction } from 'redux-actions';

// Action Type
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';


// Action
// export const increment = () => ({ type: INCREMENT });
// export const decrement = () => ({ type: DECREMENT });
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// Initial state
const initialState = {
    number: 0,
}

// reducer
// export default handleActions({
//     [INCREMENT]: (state, action) => {
//         return { number: state.number + 1 };
//     },

//     [DECREMENT]: ({ number }) => ({ number: (number > 0) ? number - 1 : number })
// }, initialState);

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { number: state.number + 1 };
        case DECREMENT:
            return { number: (state.number > 0) ? state.number - 1 : state.number };
        default:
            return state;
    }
}