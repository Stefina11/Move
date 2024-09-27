import { IMezzo } from '../interfaces/IMezzo';
import { IUtente } from '../interfaces/IUtente';

export class Mezzo implements IMezzo{

    constructor(public id:number, public tipo:"bici"|"scooter"|"monopattino", public stato:"disponibile"|"in uso"){}

    assegnaUtente(utente: IUtente): void {
        
        if(this.stato === "disponibile"){
            this.stato = "in uso";
            console.log(`il mezzo ${this.id} ${this.tipo} è stato assegnato all'utente ${utente.nome} ${utente.cognome}`);
        }

    }


}