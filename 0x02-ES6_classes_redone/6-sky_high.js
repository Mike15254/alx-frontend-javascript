import Building from "./5-bulding";

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        this._floors = floors;
    };
    get floors() {
        return this._floors;
    }
    set (value) {
        this._floors = value;
    }
    evacuationWarningMessage() {
        return  `Evacuate slowly the ${this.floors} floors`
    }
}