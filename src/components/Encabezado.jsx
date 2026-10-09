import  Menusuario  from "./Menusuario"


function Encabezado(){
    return(
        <header className="encabezado">
            <div className="encabezado-marca">
            <h1>Mi primer app con react </h1>
            <nav>
                <a href="#">inicio</a>
                <a href="#">tecnologo</a>
                <a href="#">contacto</a>
            </nav>
            </div>
            <Menusuario />

        </header>
    )
}

export default Encabezado