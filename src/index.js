//Añadimos configuracion que necesita para que este componente esté dentro de nuestro archivo html

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

//utilizamos reactdom para empujar este componente a la parte visual del html
ReactDOM.render(<App />, document.getElementById('app'));

