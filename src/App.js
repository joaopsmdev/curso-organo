import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import Time from "./components/Time";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#D9F7E9",
    },
    {
      id: uuidv4(),
      nome: "Caminhoneiros",
      cor: "#E8F8FF",
    },
    {
      id: uuidv4(),
      nome: "Data Sciense",
      cor: "#F0F8E2",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#FDE7E8",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#FAE95F5",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFF5D9",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FFEEDF",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: "João Marinho",
      cargo: "Desenvolvedor JavaScript",
      imagem: "https://github.com/joaopsmdev.png",
      team: times[0].nome,
      favorito: false,
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  const aoNovoColaborador = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  function mudaCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function onDelete(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  }
  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaborador(colaborador)
        }
      />
      <section className="times">
        {times.map((time, indice) => (
          <Time
            aoFavoritar={resolverFavorito}
            mudarCor={mudaCorDoTime}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.team === time.nome
            )}
            aoDeletar={onDelete}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
