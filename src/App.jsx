import { useState } from 'react'
import './App.css'

function App() {
  const [cep, setCep] = useState("")
  const [getLogradouro, setLogradouro] = useState("")
  const [getComplemento, setComplemento] = useState("")
  const [getUnidade, setUnidade] = useState("")
  const [getBairro, setBairro] = useState("")
  const [getLocalidade, setLocalidade] = useState("")
  const [getUf, setUf] = useState("")
  const [getEstado, setEstado] = useState("")
  const [getRegiao, setRegiao] = useState("")

  const consultar = async () => {
    const resultado_api = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const resultado_obj = await resultado_api.json()
    setLogradouro(resultado_obj.logradouro)
    setComplemento(resultado_obj.complemento)
    setUnidade(resultado_obj.unidade)
    setBairro(resultado_obj.bairro)
    setLocalidade(resultado_obj.localidade)
    setUf(resultado_obj.uf)
    setEstado(resultado_obj.estado)
    setRegiao(resultado_obj.regiao)
  }

  return (
    <>
      <header>
        <h1>Via CEP</h1>
      </header>

      <nav>
        <label htmlFor="">Digite seu CEP</label> <br />
        <input type="text" value={cep} onChange={(event) => setCep(event.target.value)} id='campo_cep'/>
        <button onClick={consultar}>Consulta CEP</button>
        
      </nav>

      <main>
        <form action="">

          <label>Logradouro:</label>
          <input type="text" value={getLogradouro} />

          <label>Complemento:</label>
          <input type="text" value={getComplemento} />

          <label>Unidade:</label>
          <input type="text" value={getUnidade} />

          <label>Bairro:</label>
          <input type="text" value={getBairro} />

          <label>Cidade:</label>
          <input type="text" value={getLocalidade} />

          <label>UF:</label>
          <input type="text" value={getUf} />

          <label>Estado:</label>
          <input type="text" value={getEstado} />

          <label>Região:</label>
          <input type="text" value={getRegiao} />
        </form>
      </main>
    </>
  )
}

export default App


