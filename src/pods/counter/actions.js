import { actionTypes } from './constants';

const {
  COUNTER_INCREMENT
} = actionTypes;

export const increment = (value) => ({
  type: COUNTER_INCREMENT,
  payload: value
});

export const doubleAsync = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(increment(getState().counter));
    }, 200);
  };
}