import React, { useState } from 'react';

/**
 * A simple counter component that demonstrates
 * the useState hook and an onClick event handler.
 */
function Counter() {
  // 1. Declare state variable 'count', initialized to 0.
  const [count, setCount] = useState(0);

  // 2. Define the event handler.
  // We use the "updater function" (currentCount =>...)
  // for correctness, as the new state depends on the old state.
  const handleIncrement = () => {
    setCount(currentCount => currentCount + 1);
  };

  // 3. Render the UI, displaying the 'count' state.
  // 4. Connect the handler to the button's 'onClick' event.
  return (
    <div>
      <h1>Count: {count}</h1>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
