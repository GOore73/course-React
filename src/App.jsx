import VideoList from './components/VideoList';
import VideoItem from './components/VideoItem';

const App = () => {
  return (
    /* 
    Siempre tiene que haber un único contenedor de primer nivel.
    no se puede hacer un return de mas de una etiqueta. Entonces qué sucedería si necesito poner mas de un VideoList. En ese caso se necesita un contenedor superior. Por ejemplo se podría usar un <div>, sin embargo uno podría no querer usar ese. Se puede usar una etiqueta genérica Fragment, que se debe importar de React para poder utilizarla. Pero existe una etique mas genérica aún que es una etiqueta vacía <></>, como en este ejemplo: 
    */
    <>
      <VideoList title='Curso de React'>
        <VideoItem
          title='Componentes'
          duration={2760}
          uploadDate={new Date(2022, 1, 25)}
          description='Componentes en React'
        ></VideoItem>
        <VideoItem
          title='useState'
          duration={3145}
          uploadDate={new Date(2022, 2, 3)}
          description='Cómo utilizar estados en React'
        ></VideoItem>
      </VideoList>
      <VideoList title='Curso de Node'>
        <VideoItem
          title='Intro a Node JS'
          duration={3000}
          uploadDate={new Date(2022, 2, 10)}
          description='Introducción al backend con Node JS'
        ></VideoItem>
      </VideoList>
      <VideoList title='Curso de Next JS'></VideoList>
    </>
  );
};

export default App;
