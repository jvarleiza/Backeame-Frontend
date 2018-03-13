export class Category {
    constructor(
        public id?: string,
        public name?: string
    ) { }

    public toString = (): string => {
        return this.name;
    }
}
