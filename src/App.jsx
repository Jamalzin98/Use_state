import { useState} from "react"

export function App() {
  const [numero, setNumero] = useState(100)
  const [mostrar, setMostrar] = useState(true)

  function esconderMostrar() {
    setMostrar(!mostrar)
  }

  function aumentar () {
    setNumero(numero + 100)
  }

  return (
    <div>
      <h1>UwuMarcinho</h1>

      <div>
        <p>Número: {numero} </p>

        <button onClick={aumentar}>Aumentar</button>
      </div>

      {
        mostrar ? (
          <div>
            <p>Marcinho é lindo</p>
            <button onClick={esconderMostrar}>Esconder</button>
          </div>
        ) : (
          <div>
            <div>
              <button onClick={esconderMostrar}>Mostrar</button>
            </div>
          </div>
        )
      }
    </div>
  )
  
  
}
