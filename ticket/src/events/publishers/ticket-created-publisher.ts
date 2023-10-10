import { Publisher, Subject, TicketUpdatedEvent } from "@zetonticket/resources";

export class TicketCreatetPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subject.TikcetCreated = Subject.TikcetCreated;
}
