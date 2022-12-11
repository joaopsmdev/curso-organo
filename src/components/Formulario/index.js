import { useState } from "react";
import Botao from "../button";
import DropDown from "../DropDown";
import TextCamp from "../TextCamp";
import "./Formulario.css";

const Formulario = (props) => {
    
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [img, setImg] = useState('');
    const [team, setTeam] = useState('');

    const aoSalvar = (e) => {
        e.preventDefault()   
        props.aoColaboradorCadastrado({
            nome, 
            cargo,
            img, 
            team,
       })
       setCargo('')
       setImg('')
       setNome('')
       setTeam('')
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextCamp 
                    obrigatorio={true} 
                    label = "Nome" 
                    placeholder="Digite seu nome" 
                    value={nome}
                    aoAlterado={valor => setNome(valor)}
                    />
                    
                <TextCamp 
                    obrigatorio={true} 
                    label = "Cargo" 
                    placeholder="Digite seu cargo" 
                    value={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    />
                <TextCamp 
                    label = "Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    value={img}
                    aoAlterado={valor => setImg(valor)}
                />
                <DropDown 
                    label = "Time" 
                    teams={props.times} 
                    value={team}
                    aoAlterado={valor => setTeam(valor)}
                    obrigatorio={true} 
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;

