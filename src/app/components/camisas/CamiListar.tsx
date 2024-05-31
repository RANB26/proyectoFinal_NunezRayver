import { useState } from "react";
import { Camisa } from "../../models/Camisa";
import { ARREGLO_CAMISAS } from "../../mocks/Camisa-mocks";
import { ARREGLO_CAMISA_MARCA } from "../../utilities/dominios/DomMarca";

export const CamiListar = () => {

    const [arrCamisas] = useState<Camisa[]>(ARREGLO_CAMISAS);
    const obtenerNombreMarca = (valor: string)=>{
        for(const objMar of ARREGLO_CAMISA_MARCA){
            if(objMar.codMarca==valor){
                return objMar.nombreMarca;
            }
        }
    }

    return(
        <>
            <div className="contenedor-listar mt-4 font-f-sora" style={{fontSize:"14px"}}>
                <header className="header">
                    <h1 id="crear-titulo" className="text-center">Listar</h1>
                    <p id="description" className="text-center">
                        Todas las camisas disponibles a la venta
                    </p>
                </header>
                    <div className="form-wrap">
                        <table className="table table-hover">
                            <thead className="table-dark">
                                <tr className="text-white">
                                    <th style={{width:"10%"}} className="text-center">Código</th>
                                    <th style={{width:"25%"}} className="text-center">Marca</th>
                                    <th style={{width:"20%"}} className="text-center">Color</th>
                                    <th style={{width:"20%"}} className="text-center">Precio</th>
                                    <th style={{width:"10%"}} className="text-center">Talla</th>
                                    <th style={{width:"15%"}} className="text-center">Imagen</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                arrCamisas.map((cami: Camisa)=>(
                                <tr className="text-center" key={cami.codCamisa}>
                                    <td className="align-middle">{cami.codCamisa}</td>
                                    <td className="align-middle">{obtenerNombreMarca(cami.codMarcaCamisa)}</td>
                                    <td className="align-middle">{cami.colorCamisa}</td>
                                    <td className="align-middle">{cami.precioCamisa}</td>
                                    <td className="align-middle">{cami.tallaCamisa}</td>
                                    <td>
                                        <img src={cami.imagenCamisaBase64} alt="" className="imagenListado"/>
                                        {/* <div className="text-info">{miPeli.imagenPelicula}</div> */}
                                    </td>
                                </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
            </div>
        </>
    ) 
}