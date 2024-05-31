import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../components/contenedor/Inicio";
import { CamiCrear } from "../../components/camisas/CamiCrear";
import { CamiListar } from "../../components/camisas/CamiListar";
import { CamiAdmin } from "../../components/camisas/CamiAdmin";
import { CamiActualizar } from "../../components/camisas/CamiActualizar";
import { Acerca } from "../../components/otros/Acerca";
import { NoEncontrado } from "../../components/contenedor/NoEncontrado";

export const Ruteo = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />}/>

            <Route path="/camcrear" element={<CamiCrear />}/>
            <Route path="/camlistar" element={<CamiListar />}/>
            <Route path="/camadmin" element={<CamiAdmin />}/>
            <Route path="/camactu/:codigo" element={<CamiActualizar />}/>

            <Route path="/acerca" element={<Acerca />}/>

            <Route path="*" element={<NoEncontrado />}/>
        </Routes>
    )
}