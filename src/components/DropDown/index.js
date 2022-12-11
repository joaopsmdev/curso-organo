import "./DropDown.css";

const DropDown = (props) => {
  
    return(
        
        <div className="drop-down">
            <label>
                {props.label}
            </label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.value} required={props.obrigatorio}>
                <option value=""></option>
                {props.teams.map(team => <option key={team} >{team}</option>)}
            </select>
        </div>
    )
}

export default DropDown