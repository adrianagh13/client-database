import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css' //importar estilos de bootstrap en el archivo main que es index

import App from './routes/App';
import { initialState } from '../initialState.json';
import reducers from './reducers'; //si en la carpeta solo hay un archivo, se puede llamar directamente a ella.

const store = createStore(initialState, reducers);

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

//provider encapsula dentor de su etiqueta a todos los componentes de la aplicación para que puedan acceder
//al store de redux, estos además deben cumplir con la función connect.

