import { Subject } from "./subjects";

export interface TicketUpdatedEvent {
  subject: Subject.TikcetCreated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
