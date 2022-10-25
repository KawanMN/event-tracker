import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from '../atom';


const useAtualizarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
    return (evento: IEvento) => {
        return setListaDeEventos(listaAantiga => {
            const indice = listaAantiga.findIndex(evt => evt.id === evento.id)

            return [...listaAantiga.slice(0, indice), evento, ...listaAantiga.slice(indice + 1)]
        })
    }
}

export default useAtualizarEvento;