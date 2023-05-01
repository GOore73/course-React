import { useEffect, useState } from 'react';

const Counter = () => {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      console.log('handleClick');
      setClicks((prevClicks) => prevClicks + 1);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return <h1>{clicks}</h1>;
};

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <Counter />}
      <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button>
    </div>
  );
};

export default App;
