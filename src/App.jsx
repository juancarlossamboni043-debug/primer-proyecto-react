import './App.css'
import Encabezado from './components/Encabezado.jsx'
import Sidebar from './components/Sidebar.jsx';
import Presentacion from './components/Presentacion';
import Tarjeta from './components/Tarjeta.jsx'
import PiePagina from './components/PiePagina.jsx'
import Datospersonales from './components/Datospersonales.jsx'

function App (){
  const programa = 'analisis y desarrollo de software '
  return(
   <>
   <div className='layout'>
     <Encabezado/>
     <Sidebar/>
     <main className="contenido">
       <h2>Bienvenido al programa{programa}</h2>
       <Presentacion/>
       
       <section className="tarjetas">
         <Tarjeta/>
         <Tarjeta/>
         <Tarjeta/>
       </section>
       <Datospersonales/>
     </main>
     <PiePagina/>
    </div>
    </>
  );
}

export default App