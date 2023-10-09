import { Subject } from "./subjects";

export interface TicketCreatedEvent {
  subject: Subject.TikcetCreated;
  data: {
    id: string;
    title: string;
    price: number;
  };
}
