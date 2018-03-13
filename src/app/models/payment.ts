import {User} from "./user";
import {CreditCard} from "./credit-card";
import {ProjectReward} from "./project-reward";

export class Payment {
    constructor(
        public id?: number,
        public user?: User,
        public creditCard?: CreditCard,
        public reward?: ProjectReward
    ) { }
}
