export class Project {
    constructor(
        public id?: number,
        public title?: string,
        public entrepreneur?: string,
        public location?: string,
        public amountPledged?: string,
        public daysToGo?: number    ,
        public briefDesc?: string,
        public percentageFunded?: number,
        public type?: number,
        public urlComponent?: string,
        public likes?: number,
        public visits?: number
    ) { }

    public toString = (): string => {
        return this.title;
    };

    public static sanitizeObj(obj) {
        let ret = {};

        for(let opt in obj) {
            let sanitized = opt.charAt(0).toLowerCase() + opt.slice(1);
            ret[sanitized] = obj[opt];
        }

        return ret;
    }

    public static sanitizeList(list) {
        let ret = [];
        list.forEach(function (obj) {
            let retObj = {};
            for(let opt in obj) {
                let sanitized = opt.charAt(0).toLowerCase() + opt.slice(1);
                retObj[sanitized] = obj[opt];
            }
            ret.push(retObj);
        });
        return ret;
    }
}
