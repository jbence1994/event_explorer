class Ticket {
  constructor(event, type, price) {
    this._event = event;
    this._type = type;
    this._price = price;
  }

  get event() {
    return this._event;
  }

  get type() {
    return this._type;
  }

  get price() {
    return this._price;
  }
}

export default Ticket;
