import Ticket from "./models/Ticket";
import Event from "./models/Event";
import TicketType from "./models/TicketType";
import { formatDate, formatPrice } from "./utils/formatter";

const event = new Event(
  "The Jimi Hendrix Experience Concert 2025",
  new Date("2025-01-31T20:00:00")
);

const tickets = [
  new Ticket(event, TicketType.EARLY_BIRD, 1000),
  new Ticket(event, TicketType.GENERAL, 2000),
  new Ticket(event, TicketType.VIP, 3500),
];

tickets.forEach((ticket) => {
  console.log(
    `${ticket.event.name} on ${formatDate(ticket.event.date)}, ${
      ticket.type
    } tickets NOW for ${formatPrice(ticket.price)}!`
  );
});
