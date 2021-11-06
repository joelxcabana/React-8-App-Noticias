import React,{Fragment,useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //definir la catetgoria y noticias
  const [categoria,setCategoria] = useState('');
  const [noticias,setNoticias] = useState([]);

  useEffect(()=>{
    const consultarApi = async () =>{
    const API_KEY = 'b7e60b0bc40846aabba07d3691e09789';
    const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${API_KEY}`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    setNoticias(noticias.articles)
    }

    consultarApi();
  },[categoria])

  return (
   <Fragment>
     <Header 
      titulo="Buscador de Noticias"
     />
     <div className="container white">
      <Formulario
       setCategoria={setCategoria}
      />
      <ListadoNoticias 
       noticias={noticias}
      />
     </div>
   </Fragment>
  );
}

export default App;
