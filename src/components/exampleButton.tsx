import React, { useState } from 'react';

interface ExampleProps {
  buttonText: string;
  header?: string;
}

export default function ExampleButton(props: ExampleProps) {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {props.header && <h1>{props.header}</h1>}
      <button onClick={increment}>{props.buttonText} +</button>
      <button onClick={decrement}>{props.buttonText} -</button>
      <p>{count}</p>
    </div>
  );
}
