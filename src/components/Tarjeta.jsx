import reactlogo from '../assets/react.svg'

function Tarjeta(){
    return(
        <article className='tarjeta '>
            <img src={reactlogo} alt='logo de react ' />
            <h3>esto es React </h3>
            <p>biblioteca de javascript para construir interfaces con componentes </p>
        </article>
    )
}
export default Tarjeta