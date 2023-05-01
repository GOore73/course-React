import { useState } from 'react';
const App = () => {
  const [search, setSearch] = useState('');
  if (search === 'reset') setSearch('Valor por defecto');
  return (
    <form
    // esta forma es colocar el set del use state dentro del onSubmit del formulario, previniendo el comportamiento por default.
    // onSubmit={(ev) => {
    //   ev.preventDefault();
    //   setSearch(ev.target.search.value);
    // }}
    >
      <input
        type='text'
        name='search'
        autoComplete='off'
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      ></input>
      <button>Buscar</button>
      <p>Resultados para {search}</p>
    </form>
  );
};
export default App;
