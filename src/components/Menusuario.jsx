import fotoPerfil from '../images/foto.jpg'

function Menusuario(){
    const nombre = 'Juan Carlos Samboni'
    const rol = 'instructor ADSO'

    return(
        <div className='menu-usuario'>
            <button type='button'className='menu-usuario-boton'>
                <img src={fotoPerfil} alt={`foto de ${nombre}`} className='avatar' />
                <span className='menu-usuario-datos'>
                    <span className='menu-usuario-nombre'>{nombre}</span>
                    <span className='menu-usuario-nombre'>{rol}</span>
                </span>
                <span className='flecha'>↓</span>
            </button>
            <ul className='menu-desplegable'>
                <li><a href='#'> 🚶mi perfil</a></li>
                <li><a href='#'> ⚙configuracion</a></li>
                <li className='separador'></li>
                <li><a href='#' className='cerrar-sesion'>cerrar sesion </a></li>
            </ul>

        </div>
    )
}

export default Menusuario