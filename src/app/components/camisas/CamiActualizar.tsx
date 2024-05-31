
import { Form } from "react-bootstrap";
import noFoto from "../../../assets/img/noDisponible.png";

export const CamiActualizar = () => {
    return(
        <>
            <div className="contenedor-form">
                <header className="header">
                    <h1 id="crear-titulo" className="text-center">Actualizar camisas</h1>
                    <p id="description" className="text-center">
                        Formulario para las editar información de las camisas seleccionadas
                    </p>
                </header>
                <div className="form-wrap">
                    <Form id="crear-form">
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="form-group">
                                    <Form.Label>Marca</Form.Label>
                                    <Form.Select className="form-control" required name="codMarcaCamisa">
                                        <option value="">Selecione la marca</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="form-group">
                                    <Form.Label>Color</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese el color de la camisa" className="form-control" required name="colorCamisa"/>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="form-group">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control type="number" min="50000" max="300000" className="form-control" placeholder="Ingrese precio de la camisa" required name="precioCamisa"/>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="form-group">
                                    <Form.Label>Talla</Form.Label>
                                    <Form.Select className="form-control" required name="tallaCamisa">
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
                                <Form.Group className="form-group">
                                    <Form.Label>Imagen</Form.Label>
                                    <Form.Control required type="file" name="imagenCamisa" />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="d-flex justify-content-center">
                                    <img src={noFoto} alt="no foto" className="maximoTamanoCreacion" />
                                </div>
                            </div>
                        </div>
                        <div className="div-boton">
                            <button type="submit" className="btn btn-primary btn-block">Actualizar camisa</button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}