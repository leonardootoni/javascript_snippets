const data = {
  locations: [],
  get location() {
    return this._location;
  },
  set location(value) {
    this._location = value.trim(); //auxiliar property
    this.locations.push(this._location);
  }
};

//code that uses the data obj
data.location = "    Toronto";
data.location = "    BH";
console.log(data.location);
console.log(data);
