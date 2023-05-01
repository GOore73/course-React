import { useEffect, useState } from 'react';

// la función cleanUp para parar un set interval.
const Interval = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Interval');
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <Interval />}
      <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button>
    </div>
  );
};

export default App;
