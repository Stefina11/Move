import { Mezzo } from './classes/Mezzo';
import { Utente } from './classes/Utente';
import { Citta } from './classes/Citta';


let monopattino = new Mezzo(1,"monopattino", "disponibile");
let bici = new Mezzo(2,"bici","disponibile");
let scooter = new Mezzo(3,"scooter", "in uso");
let monopattino2 = new Mezzo(4, "monopattino", "disponibile");

let utente1 = new Utente("marco", "morra", "stefmai@email.it", "carta");
let utente2 = new Utente("stefi", "messina", "ste@", "bancomat");

let roma = new Citta("roma",[monopattino]);

roma.aggiungiMezzo(scooter);
roma.aggiungiMezzo(bici);
utente1.prenotaMezzo(monopattino);
roma.aggiungiMezzo(monopattino2);