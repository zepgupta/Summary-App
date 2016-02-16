import { actionTypes } from './constants';

const {
  COUNTER_INCREMENT,
} = actionTypes;

export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + action.payload;

    default:
      return state;
  }
}
