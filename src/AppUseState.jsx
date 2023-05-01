import { useState } from 'react';

const getInitialState = () => {
  // observar que esta función se ejecuta una sola vez cuando se usa dentro de useState
  console.log('getInitialState');
  return { val: 12 };
};

// const App = () => {
//   const likes = getInitialState();
//   console.log(likes);
//   const likes2 = { val: 12 };
//   console.log(likes2);
// };

const Likes = () => {
  console.log('Render Likes');
  const [likes, setLikes] = useState(getInitialState);
  return (
    <Button
      onClick={() => {
        const newLikes = { ...likes };
        newLikes.val++; // ver las notas para este ejemplo en capítulo 09 de 000-notes.txt
        setLikes(newLikes);
      }}
    >
      {likes.val} likes
    </Button>
  );
};

const Button = ({ onClick, children }) => {
  console.log('Render Button');
  return <button onClick={onClick}>{children}</button>;
};
const App = () => {
  console.log('Render App');
  return <Likes></Likes>;
};

export default App;
