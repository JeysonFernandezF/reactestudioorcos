import { Toolbar } from 'primereact/toolbar';
import icono from '../assets/icono.png'
import { Image } from "primereact/image";

function OrcosToolbar () {

    return (
        <div className="row">
            <Toolbar 
                start={<Image width='60px' src={icono} />}
                end={<h3>Uno para Dominarlos a todos</h3>}
            >

            </Toolbar>
        </div>
    )


}

export default OrcosToolbar;