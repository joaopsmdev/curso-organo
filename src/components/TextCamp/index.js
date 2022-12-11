import './TextCamp.css';

const TextCamp = (props) => {
        
        const aoDigitado = (evento) => {
            props.aoAlterado(evento.target.value)
        }
        
        const placeholderModificada = `${props.placeholder}...`
    return(
        
        <div className="text-camp">
            <label>
                {props.label}
            </label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default TextCamp