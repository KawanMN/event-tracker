import { eventosAsync } from './seletores/index';
import { IFiltroDeEventos } from './../interfaces/IFiltrosDeEventos';
import { IEvento } from './../interfaces/IEvento';
import { atom } from "recoil";



export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: eventosAsync
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
    key: 'filtroDeEventos',
    default: {}
})