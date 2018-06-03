import * as React from 'react';
import { Dispatch } from 'react-redux';
import * as actions from '../actions';
export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onAsyncDecrement?: () => void;
  dispatch: Dispatch<actions.EnthusiasmAction>;
}
class Hello extends React.Component<Props, object> {

  handle() {
    this.props.dispatch(actions.asyncDecrementEnthusiasmFunc());
  }

  render() {
    const { name, enthusiasmLevel = 1, onIncrement, onDecrement } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }



    return (
      <div className='hello'>
        <div className='greeting'>
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={this.handle.bind(this)}>异步减少</button>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  }
}

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

export default Hello;
