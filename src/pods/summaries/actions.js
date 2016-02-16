import shortid from 'shortid';
import { actionTypes } from './constants';

const {
  CREATE_SUMMARY,
} = actionTypes;

export function createSummary(article) {
  return {
    type: CREATE_SUMMARY,
    id: shortid.generate(),
    article,
  };
}