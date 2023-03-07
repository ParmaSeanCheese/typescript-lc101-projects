"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacity) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacity;
    }
    ;
    Rocket.prototype.sumMass = function (items) {
        var totalKg = 0;
        for (var i = 0; i < items.length; i++) {
            totalKg += items[i].massKg;
        }
        return totalKg;
    };
    ;
    Rocket.prototype.currentMassKg = function () {
        var currentKg = 0;
        currentKg = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return currentKg;
    };
    ;
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    ;
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    ;
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
