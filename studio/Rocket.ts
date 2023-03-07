import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";


export class Rocket  {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor (name: string, totalCapacity: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacity;
    };

    sumMass(items: Payload[]):number {
        let totalKg: number = 0;

        for (let i = 0; i < items.length; i++) {
            totalKg += items[i].massKg;
        }
        return totalKg;
    };

    currentMassKg(): number {
        let currentKg: number = 0;

        currentKg = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return currentKg;
    };

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true
        } else {return false}
    };

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else {return false}
    };

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        } else {return false}
    }
}