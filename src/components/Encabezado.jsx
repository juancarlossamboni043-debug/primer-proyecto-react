import  Menusuario  from "./Menusuario"
function Encabezado({usuario}){
    return(
        <header className="encabezado">
            <div className="encabezado-marca">
                <span className="encabezado-logo">⚛️</span>
            <h1>Mi dashboard </h1>
            </div>
            <Menusuario usuario={usuario}/>

        </header>
    )
}

export default Encabezado