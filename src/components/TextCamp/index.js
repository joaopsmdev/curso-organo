import "./TextCamp.css";

const TextCamp = (props) => {
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  const placeholderModificada = `${props.placeholder}...`;
  return (
    <div className={`text-camp text-camp-${props.tipo}`}>
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
        type={props.tipo}
      />
    </div>
  );
};

export default TextCamp;
