import { IUtente } from '../interfaces/IUtente';

export interface IMezzo {

    tipo: "bici" | "scooter" | "monopattino";
    id: number;
    stato: "disponibile" | "in uso";

    assegnaUtente(utente: IUtente): void;
}