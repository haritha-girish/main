type Occupant = {
    name: string;
    age : number;
}
class Room<T extends Occupant>{

    occupants : T[];

    constructor(){
        this.occupants = [];
    }

    addOccupant(occupant : T):void{
        this.occupants.push(occupant);//[{name : 'Tom', age : 15},{name : 'Jerry', age : 10}]
    }

    getOccupants():T[]{
        return this.occupants;
    }
}

let room1 = new Room<Occupant>(); // this is a room with generic Ocuupant type 
let room2 = new Room<Occupant>(); // this is a room with generic Ocuupant type 


room1.addOccupant({name : 'Tom', age : 15}); //adding an occupant to room1
room1.addOccupant({name : 'Jerry', age : 10}); //adding another occupant to room1

room2.addOccupant({name : 'Bob', age : 14});
room2.addOccupant({name : 'Cat', age : 13});

// console.log(`Occupants in Room 1 : ${room1.getOccupants()}`)

console.log(room1.getOccupants());
console.log(room2.getOccupants());



