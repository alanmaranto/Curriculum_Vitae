import React from 'react';

//Esto significa que es un return explícito: que no requiere mas indicaciones y solo exporta cuando se requiera
const Main = ({children }) => (
    <div className="Main">
        <div className="Main-container">
            {children}
        </div>
    </div>
);

export default Main;

