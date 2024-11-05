import Event from "./Event";
import TicketType from "./TicketType";

class Ticket {
  private readonly _event: Event;
  private readonly _type: TicketType;
  private readonly _price: number;

  constructor(event: Event, type: TicketType, price: number) {
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
