import Cabecalho from "@/components/templates/Cabecalho";
import Conteudo from "@/components/templates/Conteudo";
import Pagina from "@/components/templates/Pagina";
import TituloPagina from "@/components/templates/TituloPagina";
import Formularios from "@/components/usuario/Formularios";
import usuario from "@/data/constants/usuarioFalso";
import { IconForms } from "@tabler/icons-react";


export default function CadastroUsuario() {

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo>
                <TituloPagina
                    icone={<IconForms />}
                    principal="Dados Cadastrais"
                    secundario={`Informações de ${usuario.email}`}
                />
                <Formularios />
            </Conteudo>
        
        </Pagina>
    )
}