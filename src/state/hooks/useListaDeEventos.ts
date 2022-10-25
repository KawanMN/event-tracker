import { eventosFiltradosStates } from './../seletores/index';
import { useRecoilValue } from "recoil"


const useListaDeEventos = () => {
    return useRecoilValue(eventosFiltradosStates)
}

export default useListaDeEventos