import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";
import { useState } from "react";

function RangoForm({onCreateRango = (rango) => {}}) {

    const [nombre, setNombre] = useState('');
    const [error, setError] = useState(false);

    const handleClick = () => {
        const rango = {nombre}; 
        onCreateRango(rango);
    }

    const validarNombre = (nuevoNombre)=>{
        if(nuevoNombre.length > 5){
            setError(true);
            console.log("hay un error");
            return;
        }

        setError(false);
        setNombre(nuevoNombre)
    }

    return(
        <Panel header="Registrar Rango"> 
            <div className="d-flex flex-column align-items-start mb-3 ">
                <label htmlFor="nombre-rango-txt">Nombre</label>
                <InputText 
                    id="nombre-rango-txt" 
                    value={nombre} onChange={(e) => validarNombre(e.target.value)}
                    className="w-100" 
                    aria-describedby="nombre-rango-help"    
                />
                <small id="nombre-rango-help">Ingrese descripción (nombre) del rango</small>
                {
                    error ? <p>Hay un error</p> : ''
                }
            </div>
            <div className="mb-3">
                <Button  label='Registrar' severity='info' onClick={() => handleClick()}/>
            </div>
        </Panel>
    )

}

export default RangoForm;