import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) =>{

    const corSecundaria = {backgroundColor:props.corSecundaria}
    const corPrimaria = {borderColor: props.corPrimaria}

    return(    
        (props.colaboradores.length > 0) ? <section className='time' style={corSecundaria}>
            <h3 style={corPrimaria}>{props.nome}</h3>
            <div>
            {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} img={colaborador.img}/>)}
            </div>
        </section>
        :''
    )
}

export default Time;