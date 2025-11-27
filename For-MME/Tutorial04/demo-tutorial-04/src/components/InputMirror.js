import React, { useState } from "react";

/**
 * A component that demonstrates a "controlled input."
 * The input's value is controlled by React state,
 * and the state is updated by the input's onChange event.
 */
function InputMirror() {
  // 1. Declare state as the single source of truth
  const [text, setText] = useState("");

  // 4. Define the event handler to update state
  //    based on the DOM event.
  function handleChange(e) {
    setText(e.target.value);
  }

  // 2. & 3. Render the UI and create the data loop:
  //    - `value` is set by state (State -> View)
  //    - `onChange` updates state (View -> State)
  return (
    <div>
      <h3>Live Input Mirror</h3>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Type something..."
      />
      {/* 5. The state drives the rest of the UI */}
      <p>You are typing: {text}</p>
    </div>
  );
}

export default InputMirror;
