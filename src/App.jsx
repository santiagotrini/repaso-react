// imports
import { useState } from 'react';
// Componente App
const App = () => {
  // variables de estado
  const [cosas, setCosas] = useState([]);
  const [entrada, setEntrada] = useState('');
  const [listaMostrada, setListaMostrada] = useState(true);
  const [nuevo, setNuevo] = useState('');
  const [orden, setOrden] = useState('');
  // handlers  
  const handleUpdate = e => {
    e.preventDefault();
    if (!nuevo || !orden) return;
    const nuevoArray = cosas.map((cosa, idx) => {
      if (idx === orden-1)
        return { texto: nuevo, id: cosa.id };
      else
        return cosa;
    });
    setCosas(nuevoArray);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!entrada) return;
    const nuevaCosa = { 
      id: Math.floor(Math.random() * 1000000), 
      texto: entrada 
    };
    setCosas([...cosas, nuevaCosa]);
    setEntrada('');
  };
  const handleChange = e => setEntrada(e.target.value);
  const handleClick = e => {
    const nuevoArray = cosas.filter(cosa => cosa.id === e.target.dataset.cosa);
    setCosas(nuevoArray);
  };
  // JSX
  return (
    <div className="App">
      <h1>Repaso React</h1>
      <ol>
        <li>Componentes y props</li>
        <li>Import / Export</li>
        <li>Expresiones de JS dentro de JSX (las llaves)</li>
        <li>Imagenes</li>
        <li>Render condicional</li>
        <li>Listas</li>
        <li>Eventos</li>
        <li>Estilos en linea y con clases</li>
        <li>localStorage</li>
        <li>Agregar, modificar y eliminar elementos de un array de objetos</li>
        <li>Hooks useState y useEffect</li>
        <li>Peticiones a APIs con axios</li>
      </ol>
      <button onClick={() => setListaMostrada(!listaMostrada)}>
        Ocultar la lista
      </button>
      {listaMostrada && <div className="Ejemplo">
        <h2>Ejemplo de repaso con arrays</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="cosa" 
            value={entrada}
            onChange={handleChange} 
          />
          <input type="submit" value="Guardar" />
        </form>
        <ol>
          {cosas.map((cosa, idx) => (
            <li id={cosa.id}  key={cosa.id}>
              {cosa.texto}
              <button data-cosa={cosa.id} onClick={handleClick}>
                Eliminar
              </button>
            </li>)
          )}
        </ol>
        
      </div>}
      <div className="Ejemplo">
        <h2>Formulario para modificar</h2>
        <form onSubmit={handleUpdate}>
          <input 
            type="text" 
            name="nuevo" 
            placeholder="nuevo texto" 
            value={nuevo}
            onChange={e => setNuevo(e.target.value)}  
          />
          <input 
            type="text" 
            name="orden" 
            placeholder="a cual" 
            value={orden}
            onChange={e => setOrden(e.target.value)}  
          />
          <input type="submit" value="Modificar" />
        </form>
      </div>
    </div>
  );
};

export default App;