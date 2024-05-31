import { useState } from "react";
import { Camisa } from "../../models/Camisa";
import { ARREGLO_CAMISAS } from "../../mocks/Camisa-mocks";
import { ARREGLO_CAMISA_MARCA } from "../../utilities/dominios/DomMarca";
import { NavLink } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

export const CamiAdmin = () =>{

    const [arrCamisas] = useState<Camisa[]>(ARREGLO_CAMISAS);
    const [objCami, setObjCami] = useState<Camisa>(new Camisa(0,"","","",0,"",""))
    const [show, setShow] = useState<boolean>(false);
    const handleClose = ()=>(setShow(false));

    const obtenerNombreMarca = (valor: string)=>{
        for(const objMar of ARREGLO_CAMISA_MARCA){
            if(objMar.codMarca==valor){
                return objMar.nombreMarca;
            }
        }
    }

    const eliminarCamisa = (codigo: number)=>{
        console.log("Intentando eliminar una camisa con código: ", codigo)
        const cantidad = arrCamisas.length;
    
        for (let i = 0; i < cantidad; i++) {
            if(arrCamisas[i] != undefined){
                const comparar = arrCamisas[i].codCamisa;
    
                if(comparar == codigo){
                    arrCamisas.splice(i,1);
                    setShow(false);
                }
            }
            }
        };

    return(
        <>
            <div className="contenedor-listar mt-4 mb-4 font-f-sora" style={{fontSize:"14px"}}>
                <header className="header">
                    <h1 id="crear-titulo" className="text-center">Administrar</h1>
                    <p id="description" className="text-center">
                        Edita o elimina las camisas a la venta
                    </p>
                </header>
                    <div className="form-wrap">
                        <table className="table table-hover">
                            <thead className="table-dark">
                                <tr className="text-white">
                                    <th style={{width:"10%"}} className="text-center">Código</th>
                                    <th style={{width:"20%"}} className="text-center">Marca</th>
                                    <th style={{width:"20%"}} className="text-center">Color</th>
                                    <th style={{width:"20%"}} className="text-center">Precio</th>
                                    <th style={{width:"10%"}} className="text-center">Talla</th>
                                    <th style={{width:"10%"}} className="text-center">Imagen</th>
                                    <th style={{width:"10%"}} className="text-center">Acciones</th>
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
                                    <td className="align-middle">
                                        <NavLink to={"/camactu/"+cami.codCamisa}>
                                            <button className="btn btn-secondary mx-1 px-2 py-1"><i className="fa-solid fa-pen-to-square"></i></button>
                                        </NavLink>
                                        <NavLink to="/#">
                                            <button className="btn btn-dark mx-1 px-2 py-1" onClick={(e)=>{e.preventDefault(); setShow(true); setObjCami(cami)}}><i className="fa-solid fa-trash"></i></button>
                                        </NavLink>
                                    </td>
                                </tr>
                                ))
                            }
                            </tbody>
                        </table>

                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Eliminar Camisa</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                ¿Está seguro de eliminar la camisa con código {objCami.codCamisa}?
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={(e)=>{e.preventDefault();setShow(false);}}>
                                    Cancelar
                                </Button>
                                <Button variant="danger" onClick={(e)=>{e.preventDefault();eliminarCamisa(objCami.codCamisa);}}>
                                    Eliminar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
            </div>
        </>
    )
}