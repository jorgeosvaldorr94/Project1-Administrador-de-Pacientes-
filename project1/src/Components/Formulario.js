import React, { Fragment, useState } from 'react';
import { v4 as uuid } from "uuid";
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {
    
    //////////State y su FuntionState///////////
    //Crear State de Citas
    const [cita, ActualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        síntomas:''
    });
    
    //Crear State para la actualizacion del error
    const [error, actualizarError] = useState(false)
    
    //funcion q se ejecuta cuando un usuario escribe en un input
    const actualizarState = e => {
        //console.log(e.target.value);
        ActualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    };
    /////////////State end///////////

    //Extract Values
    const { mascota, propietario, fecha, hora, síntomas } = cita;

    //Cuando se envia el formulario

    const SubmitCita = e => {
        e.preventDefault();

        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || 
        fecha.trim() === '' || hora.trim() === '' || síntomas.trim() === '') {
            actualizarError(true);
            return;
        }
        //Eliminar el mensaje previo
        actualizarError(false);
    
        //Asignar ID
        cita.id = uuid();

        //Crear la Cita
        crearCita(cita);

        //Reiniciar el Form
        ActualizarCita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        síntomas:''
        });

    };

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            { error
            ?
            <p className='alerta-error'>Todos los campos con obligatorios</p>
            :
            null
            }

            <form
                onSubmit={SubmitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className='u-full-width'
                    placeholder='Nombre Mascota'
                    onChange={actualizarState}
                    value={cita.mascota}
                />

                <label>Nombre del Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className='u-full-width'
                    placeholder='Nombre dueño Mascota'
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className='u-full-width'
                    onChange={actualizarState}
                    value={fecha}
                 />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className='u-full-width'
                    onChange={actualizarState}
                    value={hora}
                 />

                <label>Síntomas</label>
                <textarea
                    className='u-full-width'
                    name='síntomas'
                    onChange={actualizarState}
                    value={síntomas}
                ></textarea>

                <button
                    type='submit'
                    className='u-full-width button-primary'
                >Agregar Cita</button>

            </form>
        </Fragment>
    );
};

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario; 