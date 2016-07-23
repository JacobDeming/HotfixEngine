export class Champion {
    playerClass: string;
    hitpoints: number;
    currentHitpoints: number;
    physicalAttack: number;
    physicalDefense: number;
    specialAttack: number;
    specialDefense: number;
    dexterity: number;
    action: string;

    constructor (playerClass:string,hitpoints?:number,currentHitpoints?:number,physicalAttack?:number,physicalDefense?:number,specialAttack?:number,specialDefense?:number,dexterity?:number,action?:string) {
        this.playerClass = playerClass;
        this.hitpoints = hitpoints;
        this.currentHitpoints = currentHitpoints;
        this.physicalAttack = physicalAttack;
        this.physicalDefense = physicalDefense;
        this.specialAttack = specialAttack;
        this.specialDefense = specialDefense;
        this.dexterity = dexterity;
        this.action = action;
    }
}