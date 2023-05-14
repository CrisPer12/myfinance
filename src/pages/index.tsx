import Financas from "@/components/financas";
import LandingPage from "@/components/landing";
import Carregando from "@/components/templates/Carregando";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import { useContext } from "react";

export default function Home() {
  const { usuario, carregando } = useContext(AutenticacaoContext)

  if(carregando) return <Carregando />

  return usuario ? <Financas /> : <LandingPage />
}