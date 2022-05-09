import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>meu projeto</h1>
      <Comentario nome="João" email="joao@gmail.com" data={new Date(2022, 5, 9)}>
        Olá, tudo bem?
      </Comentario>

      <Comentario nome="Maria" email="maria@gmail.com" data={new Date(2022, 5, 10)} >
        Olá, tudo bem sim.
      </Comentario>      
    </div>
  );
}

export default App;
