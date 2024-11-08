class Event {
  private readonly _name: string;
  private readonly _date: Date;

  constructor(name: string, date: Date) {
    this._name = name;
    this._date = date;
  }

  get name(): string {
    return this._name;
  }

  get date(): Date {
    return this._date;
  }
}

export default Event;
