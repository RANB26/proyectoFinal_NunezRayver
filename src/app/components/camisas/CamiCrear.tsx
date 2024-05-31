import Form from "react-bootstrap/Form";
import noFoto from "../../../assets/img/noDisponible.png";
import { useState } from "react";
import { ARREGLO_CAMISA_MARCA } from "../../utilities/dominios/DomMarca";
import { ARREGLO_CAMISAS } from "../../mocks/Camisa-mocks";
import { Camisa } from "../../models/Camisa";
import { CamisasMarca } from "../../models/CamisasMarca";
import { useFormulario } from "../../utilities/misHooks/useFormulario";
import { ConvertirBase64 } from "../../utilities/funciones/ConvertirBase64";
import { useNavigate } from "react-router-dom";


export const CamiCrear = () => {

    const irsePara = useNavigate();

    type formHtml = React.FormEvent<HTMLFormElement>;
    const [enProceso, setEnProceso] = useState<boolean>(false);
    const [imgBase64, setImgBase64] = useState<any>();
    const [imgMiniatura, setImagenMiniatura] = useState<any>(noFoto);

    const [arrCamisas] = useState<Camisa[]>(ARREGLO_CAMISAS);
    const [arrMarcas] = useState<CamisasMarca[]>(ARREGLO_CAMISA_MARCA);

    let{
        codMarcaCamisa,
        colorCamisa,
        precioCamisa,
        tallaCamisa,
        imagenCamisa,
        dobleEnlace,
        objeto
    } = useFormulario<Camisa>(new Camisa(0,"","","",0,"",""));


    const enviarForm =(objForm: formHtml)=>{
        objForm.preventDefault();
        const formulario = objForm.currentTarget;
        if(formulario.checkValidity()==false){
            objForm.preventDefault();
            objForm.stopPropagation();
            setEnProceso(true);
        }else{
            const ultimaCam = arrCamisas[arrCamisas.length-1];
            const nuevoCod = ultimaCam.codCamisa + 1; 
            objeto.codCamisa = nuevoCod;
            objeto.imagenCamisaBase64 = imgBase64;
            arrCamisas.push(objeto);
            setEnProceso(false);
            irsePara("/camlistar")
        }
    }

    const cargarImagen = async (e: any) => {
        const archivos = e.target.files;
        const imagen = archivos[0];
        setImagenMiniatura(URL.createObjectURL(imagen));
        dobleEnlace(e);
        const base64 = await ConvertirBase64(imagen);
        setImgBase64(base64);
    };

    return (
        <>
            <div className="contenedor-form">
                <header className="header">
                    <h1 id="crear-titulo" className="text-center">Crea camisas</h1>
                    <p id="description" className="text-center">
                        Formulario para las nuevas camisas a vender
                    </p>
                </header>
                <div className="form-wrap">
                    <Form id="crear-form" noValidate validated={enProceso} onSubmit={enviarForm}>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="form-group" controlId="mar">
                                    <Form.Label>Marca</Form.Label>
                                    <Form.Select className="form-control" required name="codMarcaCamisa" value={codMarcaCamisa} onChange={dobleEnlace}>
                                        <option value="">Selecione la marca</option>
                                        {
                                            arrMarcas.map((miMarca: CamisasMarca)=>(
                                                <option value={miMarca.codMarca} key={miMarca.codMarca}>{miMarca.nombreMarca}</option>
                                            )) 
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="color" className="form-group">
                                    <Form.Label>Color</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese el color de la camisa" className="form-control" required name="colorCamisa" value={colorCamisa} onChange={dobleEnlace}/>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group controlId="precio" className="form-group">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control type="number" min="50000" max="300000" className="form-control" placeholder="Ingrese precio de la camisa" required name="precioCamisa" value={precioCamisa} onChange={dobleEnlace}/>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="form-group" controlId="talla">
                                    <Form.Label>Talla</Form.Label>
                                    <Form.Select className="form-control" required name="tallaCamisa" value={tallaCamisa} onChange={dobleEnlace}>
                                        <option value="">Seleccione la talla</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Form.Group className="form-group" controlId="fot">
                                    <Form.Label>Imagen</Form.Label>
                                    <Form.Control 
                                    required type="file" 
                                    name="imagenCamisa"
                                    value={imagenCamisa}
                                    onChange={cargarImagen}
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="d-flex justify-content-center">
                                    <img src={imgMiniatura} alt="no foto" className="maximoTamanoCreacion" />
                                </div>
                            </div>
                        </div>
                        <div className="div-boton">
                            <button type="submit" className="btn btn-primary btn-block">Crear camisa</button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}