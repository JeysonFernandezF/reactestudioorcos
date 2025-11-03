import { Toast } from "primereact/toast";
import OrcosToolbar from "../components/OrcosToolbar";
import { useEffect, useRef, useState } from "react";
import RangoForm from "../components/RangoForm";
import { createRango, getRangos } from "../services/RangosServices";
import RangosView from "../components/RangosView";
import EmptyState from "../components/EmptyState";
import GuerreroForm from "../components/GuerreroForm";
import GuerrerosTable from "../components/GuerrerosTable";
import { createGuerrero, getGuerreros, removeGuerrero } from "../services/GuerrerosServices";

const OrcosAdminContainer = () => {
    const toast = useRef(null);

    const [rangos, setRangos] = useState([]);
    const [guerreros, setGuerreros] = useState([])

    useEffect(()=> {
        setRangos(getRangos());
        setGuerreros(getGuerreros());
    },[])

    const handleGuerreroCreate = (guerrero) => {
        if(guerreros.find(g => g.nombre.toLowerCase() === guerrero.nombre.toLowerCase())){
            toast.current.show({severity:"error",summary:"Guerrero ya existe", sticky: true});
            return;
        }

        createGuerrero(guerrero);
        setGuerreros(getGuerreros());
        toast.current.show({severity:"info", summary: "Guerrero registrado", sticky:true});
    }

    const handleGuerreroRemove = (guerrero) => {
        removeGuerrero(guerrero);
        setGuerreros(getGuerreros());
        toast.current.show({severity:"warn", summary:"Guerrero eliminado", sticky:true})
    }

    const handleRangoCreate = (rango) => {
        if(rangos.find((r)=>r.nombre.toLowerCase() == rango.nombre.toLowerCase()) != null){
            toast.current.show({severity: "error", summary:"Rango ya existente", sticky:true});
            return;
        }

        createRango(rango);
        setRangos(getRangos());
        toast.current.show({severity: "info", summary: "Rango registrado", sticky:true})

    }

    return (
        <>
            <Toast ref={toast} />
            <OrcosToolbar />
            <div className="row mt-5">
                <div className="col">
                    <div className="row">
                        <div className="col col-md-4">
                            <RangoForm onCreateRango={handleRangoCreate} />
                        </div>
                        <div className="col col-md-8">
                            <RangosView rangos={rangos} />
                        </div>
                        
                    </div>
                    {rangos && rangos.length > 0 ? 
                        <div className="row mt-5">
                            <div className="col col-md-4">
                                <GuerreroForm onCreateGuerrero={handleGuerreroCreate} rangos={rangos} />
                            </div>
                            <div className="col col-md-8">
                                <GuerrerosTable guerreros={guerreros} onRemoveGuerrero={handleGuerreroRemove}/>
                            </div>


                        </div>
                    : 
                        <EmptyState title='No hay Rangos' contenido={"Debe registrar rangos para generar guerreros"}></EmptyState>}
                    
                </div>
            </div>
        </>
    )
}

export default OrcosAdminContainer;