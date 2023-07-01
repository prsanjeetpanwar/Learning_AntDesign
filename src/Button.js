import { useState } from 'react';

const Button = () => {
  const [state, setState] = useState(10);

  const decrement = () => {
    if (state === 0) {
      setState(10);
    } else {
      setState((s) => s - 1);
    }
  };

  return (
    <div>
      <button onClick={decrement}>
        decrement: {state}
      </button>
    </div>
  );
};

export default Button;
