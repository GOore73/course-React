// import ReactDOM from 'react-dom/client';
// import React from 'react';

// import './index.css'; // esto se podría hacer en el html, pero es mejor hacerlo aquí porque luego al empaquetar se optimiza mejor estando aquí.
// adicionalmente luego cada módulo podrá importar su propio css.

/* CLASE 05 
________________________________________________________________________
*/

// Forma 1: una función que devuelve un objeto renderizable.
// const title = (texto) => <h3 className='title'>{texto}</h3>;
// const app = (
//   <div>
//     {title('Útil')}
//     {title('Útil1')}
//     {title('Útil2')}
//   </div>
// );

// Forma 2: La función anterior, llamada directamente como una etiqueta, en la que los parámetros se usan dentro de la función, y van en el objeto props. El nombre de la etiqueta, tiene que ser en mayúsculas.
// const Title = (props) => {
//   return <h3 className='title'>{props.texto}</h3>;
// };

// const app = (
//   <div>
//     <Title texto='Desarrollo Útil' />
//     <Title texto='Desarrollo Útil2' />
//   </div>
// );

// Forma 3: como la función Title es una etiqueta, puedo pasarle un children. Y este children es también parte de props.
// const Title = (props) => {
//   return <h3 className='title'>{props.children}</h3>;
// };

// const app = (
//   <div>
//     <Title>Desarrollo Útil 1</Title>
//     <Title>Desarrollo Útil 3</Title>
//   </div>
// );

// console.log(app);

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);

// root.render(app);

/* *********************************************************************
Clase 06 Estructurar y dar jerarquía a los componentes partiendo del app
simula una lista de reproducción de videos de youtube
Muestra también como agregar alguna lógica sencilla dentro del componente.
Cómo modularizarlo, extraerlo de este main.jsx y llamarlo
*********************************************************************** 
*/

import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';

// react 18:
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App />);

// React 17
// const container = document.getElementById('root');

// ReactDOM.render(<App />, container);
