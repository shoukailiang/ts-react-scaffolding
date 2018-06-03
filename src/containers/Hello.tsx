import Hello from '../components/Hello';
import * as actions from '../actions/';
import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../types/index';

export function mapStateToProps(Globalstate: any) {
  const num: StoreState = Globalstate.num;
  const { enthusiasmLevel, languageName } = num;
  return {
    enthusiasmLevel,
    name: languageName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onAsyncDecrement: () => dispatch(actions.asyncDecrementEnthusiasm()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello as any);
