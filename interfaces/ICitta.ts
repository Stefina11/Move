import { IMezzo } from '../interfaces/IMezzo';

export interface ICitta{

    nome: string;
    mezziDisponibili: IMezzo[];
    aggiungiMezzo(mezzo: IMezzo): void;

}