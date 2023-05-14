import Pagina from "../templates/Pagina";

/*-------------------------COMPONENTES---------------------*/
import Cabecalho from "./cabecalho";
import Depoimentos from "./depoimentos";
import Destaque from "./destaque";
import Rodape from "./rodape";
import Vantagens from "./vantagens";

export default function LandingPage() {
    return (
        <Pagina externa>
            <Cabecalho />
            <Destaque />
            <Vantagens />
            <Depoimentos />
            <Rodape />
        </Pagina>
    )
}