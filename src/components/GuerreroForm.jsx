import { Panel } from 'primereact/panel'
import React, { useState } from 'react'
import {SelectButton} from 'primereact/selectbutton';
import { InputText } from 'primereact/inputtext';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
function GuerreroForm ({rangos=[],onCreateGuerrero=(guerrero)=>{}}) {


    const [nombre, setNombre] = useState("");
    const tipoGuerreros = ['Orco','Uruk'];
    const [tipo, setTipo] = useState(tipoGuerreros[0]);
    const [nivel, setNivel] = useState(1);
    const [rangoSeleccionado, setRangoSeleccionado] = useState(rangos[0]);

    const handleClick = () => {
        const guerrero = {nombre:nombre, tipo:tipo, nivel:nivel, rango: rangoSeleccionado};
        onCreateGuerrero(guerrero)
    }

    return (
        <Panel header="Ingresar Guerrero">
            <div className="mb-3 d-flex flex-column align-items-start">
                <label htmlFor="form-text-nombre">Nombre</label>
                <InputText 
                    className='w-100'
                    id="form-text-nombre" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)} 
                    aria-describedby="nombre-guerrero-help"
                />                
            </div>
            <div className="mb-3 d-flex flex-row justify-content-between">
                <label htmlFor="form-tipo-select">Tipo de guerrero</label>
                <SelectButton 
                    id="form-tipo-select" 
                    options={tipoGuerreros} 
                    value={tipo} 
                    onChange={e=>setTipo(e.value)}
                />
            </div>
            <div className="mb-3 d-flex flex-row justify-content-between">
                <label htmlFor="form-nivel">Nivel</label>
                <Knob id="form-nivel" value={nivel} min={1} max={100} onChange={e=>setNivel(e.value)}/>
            </div>
            <div className='mb-3 d-flex flex-column align-items-start'>
                <label htmlFor="form-rango">Rango</label>
                <Dropdown className='w-100' id="form-rango" value={rangoSeleccionado} onChange={e=>setRangoSeleccionado(e.value)} options={rangos} optionLabel="nombre"
                    placeholder="Seleccionar un Rango" checkmark={true} highlightOnSelect={false}/>
            </div>
            <div className="mb-3 d-flex flex-column">
                <Button label="Registrar" severity="info" onClick={handleClick} rounded/>
            </div>
        
        </Panel>
    )
}

export default GuerreroForm;