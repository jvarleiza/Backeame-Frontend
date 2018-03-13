"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Project = (function () {
    function Project(id, title, entrepreneur, desc, location, percent, amountPledged, daysToGo) {
        var _this = this;
        this.toString = function () {
            return _this.title;
        };
        this.id = id;
        this.title = title;
        this.entrepreneur = entrepreneur;
        this.briefDesc = desc;
        this.location = location;
        this.percentFunded = percent;
        this.amountPledged = amountPledged;
        this.daysToGo = daysToGo;
    }
    return Project;
}());
exports.Project = Project;
