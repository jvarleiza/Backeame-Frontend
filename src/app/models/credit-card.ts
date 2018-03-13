export class CreditCard {
    constructor(
        public id?: number,
        public name?: string,
        public number?: string,
        public securityCode?: string,
        public expMonth?: string,
        public expYear?: string,
    ) { }
}
