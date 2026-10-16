import './App.css';
import Encabezado from './components/Encabezado.jsx'
import Sidebar from './components/Sidebar.jsx';
import Presentacion from './components/Presentacion';
import Tarjeta from './components/Tarjeta.jsx'
import PiePagina from './components/PiePagina.jsx'


function App() {
  const programa = "Analisis y Desarrollo de Software";

  return (
    <>
    <div className="app-padre">
      <Encabezado />
      <div className="app-layout">
        <Sidebar />
        <main className="contenido">
          <h2>Bienvenido al Programa {programa}</h2>
          <Presentacion />
          <section className="tarjetas">
            <Tarjeta
            icono="⚛️"
            titulo="React"
            descripcion="herramienta de javascript para construir interfaces con componentes"
            horas={120}
            destacada={true}
            />
            <Tarjeta
            icono="⚡" 
            titulo="vite"
            descripcion="herramienta que crea y ejecuta y empaquetar "
            horas={60}
            destacada={false}
            />
            <Tarjeta
            icono="🔍"
            titulo="ESlint"
            descripcion="revisa la calidad del codigo y encuentra errores "
            horas={20}
            destacada={false}
            />
          </section>
        </main>
      </div>

      <PiePagina />
    </div>
    </>
  );
}

export default App