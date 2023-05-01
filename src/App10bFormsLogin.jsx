import { useState } from 'react';

// 1. Versión NO controlada
// const App = () => {
//   return (
//     <form
//       onSubmit={(ev) => {
//         ev.preventDefault();
//         const email = ev.target.email.value;
//         const password = ev.target.password.value;
//         login(email, password);
//       }}
//     >
//       <input
//         type='text'
//         name='email'
//         placeholder='Email'
//         autoComplete='off'
//       ></input>
//       <input type='password' name='password' placeholder='Contraseña'></input>
//       <button type='submit'>Iniciar sesión</button>
//     </form>
//   );
// };

// const login = (email, password) => {
//   if (email === 'hola@desarrolloutil.com' && password === 'test')
//     alert('Login correcto');
//   else alert('login incorrecto');
// };

// 2. Versión controlada

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errorMessage = validate(email, password);
  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        login(email, password);
      }}
    >
      <input
        type='text'
        name='email'
        placeholder='Email'
        autoComplete='off'
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      ></input>
      <input
        type='password'
        name='password'
        placeholder='Contraseña'
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      ></input>
      <p>{errorMessage}</p>
      <button type='submit' disabled={errorMessage}>
        {/* el disabled aquí depende de errorMessage que sea false, no devuelve error */}
        Iniciar sesión
      </button>
    </form>
  );
};

const login = (email, password) => {
  if (email === 'hola@desarrolloutil.com' && password === 'test')
    alert('Login correcto');
  else alert('login incorrecto');
};

const validate = (email, password) => {
  if (!email.includes('@')) return 'Formato Email incorrecto';
  if (password.length < 4) return 'Longitud mínima requerida pass = 4';
};

export default App;
