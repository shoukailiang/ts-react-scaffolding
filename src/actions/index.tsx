import * as constants from '../constants';
import { Dispatch } from 'react-redux';


export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export interface AsyncDecrementEnthusiasm {
  type: constants.DECREMENT_ASYNC_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm | AsyncDecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM,
  };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM,
  };
}

export function asyncDecrementEnthusiasm(): AsyncDecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ASYNC_ENTHUSIASM,
  };
}
const pro = () => new Promise((yes, no) => {
  setTimeout(() => {
    yes();
  }, 3000);
});

export function asyncDecrementEnthusiasmFunc(): any {
  return (dispatch: Dispatch<EnthusiasmAction>) => {
    pro().then(() => dispatch(asyncDecrementEnthusiasm()));
  };
}
