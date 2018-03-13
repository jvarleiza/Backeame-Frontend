import { Category } from './category';
import {ProjectReward} from "./project-reward";

export class ProjectFull {
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
        public categories?: Category[],
        public startDate?: string,
        public finishDate?: string,
        public isDeleted?: boolean,
        public urlComponent?: string,
        public rewards?: ProjectReward[],
        public backerAmount?: string
    ) { }

    public static sanitizeObj(obj) {
        let ret = {};

        for(let opt in obj) {
            let sanitized = opt.charAt(0).toLowerCase() + opt.slice(1);
            ret[sanitized] = obj[opt];
        }

        return ret;
    }
}
