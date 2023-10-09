import { Publisher } from "./base-publisher";
import { TicketCreatedEvent } from "./ticket-created-listener";
import { Subject } from "./subjects";

export class TicketCreatePublisher extends Publisher<TicketCreatedEvent> {
  subject: Subject.TikcetCreated = Subject.TikcetCreated;
}
