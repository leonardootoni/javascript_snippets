let restaurant = {
  name: "ASB",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function(partySize) {
    return partySize + this.guestCount <= this.guestCapacity;
  },
  seatParty: function(partySize) {
    this.guestCount += partySize;
  },
  removeParty: function(partySize) {
    this.guestCount = this.guestCount - partySize;
  }
};

console.log(`The restaurant capacity is ${restaurant.guestCount}`);
console.log(restaurant.checkAvailability(4));
restaurant.seatParty(4);
console.log(`The restaurant capacity is ${restaurant.guestCount}`);
restaurant.removeParty(4);
console.log(`The restaurant capacity is ${restaurant.guestCount}`);
