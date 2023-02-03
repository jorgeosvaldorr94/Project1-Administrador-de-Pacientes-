import React, { Fragment, useState, useEffect } from 'react'
import Formulario from './Components/Formulario'
import Cita from './Components/Cita'

function App() {
    //Citas en LocalStorage
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (!citasIniciales) {
        citasIniciales = [];
    };

    // Date Arry
    const [citas, guardarCitas] = useState(citasIniciales);

    //Detectar cambios en el State
    useEffect( () => {
        let citasIniciales = JSON.parse(localStorage.getItem('citas'));

        if(citasIniciales){
            localStorage.setItem('citas', JSON.stringify(citas));
        } else {
            localStorage.setItem('citas', JSON.stringify(citas));
        }
    }, [citas] );

    //Funcion q tome las citas actuales y agregue la nueva
    const crearCita = cita => {
        guardarCitas([
            ...citas,
            cita
        ])
    };

    //Funcion q elimina las citas por su IDs
    const eliminarCita = id => {
        const nuevasCitas = citas.filter(cita => cita.id !== id);
        guardarCitas(nuevasCitas);
    }

    //Mensaje Condicional
    const titulo = citas.length === 0 
    ?
    'No hay Citas'
    :
    'Administra tus Citas';

    return (
        <Fragment>
            <h1>Administrador de Consultas</h1>
            
           <div className='container'>
              <div className='row'>
                  <div className='one-half column'>
                      <Formulario
                          crearCita={crearCita} 
                      />
                  </div>
                  <div className='one-half column'>
                      <div>
                          <h2>{titulo}</h2>
                          {citas.map( cita => (
                              <Cita
                                  key={cita.id}
                                  cita={cita}
                                  eliminarCita={eliminarCita}
                              />
                          ))}
                      </div>
                  </div>
              </div>
           </div>


        </Fragment>
    );
};

export default App;
