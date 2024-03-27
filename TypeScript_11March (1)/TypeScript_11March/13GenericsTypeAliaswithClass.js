var Room = /** @class */ (function () {
    function Room() {
        this.occupants = [];
    }
    Room.prototype.addOccupant = function (occupant) {
        this.occupants.push(occupant); //[{name : 'Tom', age : 15},{name : 'Jerry', age : 10}]
    };
    Room.prototype.getOccupants = function () {
        return this.occupants;
    };
    return Room;
}());
var room1 = new Room(); // this is a room with generic Ocuupant type 
var room2 = new Room(); // this is a room with generic Ocuupant type 
room1.addOccupant({ name: 'Tom', age: 15 }); //adding an occupant to room1
room1.addOccupant({ name: 'Jerry', age: 10 }); //adding another occupant to room1
room2.addOccupant({ name: 'Bob', age: 14 });
room2.addOccupant({ name: 'Cat', age: 13 });
// console.log(`Occupants in Room 1 : ${room1.getOccupants()}`)
console.log(room1.getOccupants());
console.log(room2.getOccupants());
