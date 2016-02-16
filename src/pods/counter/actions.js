import { actionTypes } from './constants';

const {
  COUNTER_INCREMENT,
} = actionTypes;

export const increment = (value = 1) => ({
  type: COUNTER_INCREMENT,
  payload: value,
});

export const doubleAsync = () =>
  (dispatch, getState) =>
    setTimeout(() => {
      dispatch(increment(getState().counter));
    }, 200);
