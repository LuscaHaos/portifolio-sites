import { useState } from 'react';// funçao usada para pegar valor do input
import { FiSearch } from 'react-icons/fi'; // importa icon de pesquisa
import api from './services/api';
import './style.css';
function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
  async function handleSearch() {
    if (input === "") {
      alert('Preencha o campo!')
      return;
    }
    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data);//diz que cep da funçao useState vai virar o objeto correspondente de response.data
      setInput('')
    }
    catch {
      alert('Endereço de cep inexistente!');
      setInput('');//apaga o que ta escrito no input depois do alert acima
    }


  }
  return (
    <div className="main-container">
      <h1 className='title'>Buscador de CEP</h1>

      <div className="container-input">
        <input
          type="text"
          placeholder="Digite o cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)} /> {/*cria funçao anonima para colocar valor dentro da funçao setInput do useState*/}
        <button className="btn-search" onClick={handleSearch}>
          <FiSearch size={20} color='fff' />
        </button>

      </div>
      {Object.keys(cep).length > 0 && ( //faz o dados aparecerem só depois que é pesquisado o cep
        <div className="result">
          <h2> <strong>CEP:</strong> {cep.cep}</h2>
          <span><strong>Rua:</strong> {cep.logradouro}</span>
          <span><strong>Complemento:</strong> {cep.complemento}</span>
          <span><strong>Bairro:</strong> {cep.bairro}</span>
          <span><strong>Localidade:</strong> {cep.localidade}</span>
        </div>

      )}
    </div>
  );
}

export default App;
