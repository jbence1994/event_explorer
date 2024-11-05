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

  get event(): Event {
    return this._event;
  }

  get type(): TicketType {
    return this._type;
  }

  get price(): number {
    return this._price;
  }
}

export default Ticket;
