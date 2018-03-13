export class ProjectReward {
    constructor(
        public id?: number,
        public title?: string,
        public price?: string,
        public message?: string,
        public estimatedDelivery?: string,
        public shipsTo?: string,
        public backerAmount?: string
    ) { }
}
