class Event {
  constructor(name, date) {
    this._name = name;
    this._date = date;
  }

  get name() {
    return this._name;
  }

  get date() {
    return this._date;
  }
}

export default Event;
