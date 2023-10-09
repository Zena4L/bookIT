import { Listenner } from "./base-listener";
import { Message } from "node-nats-streaming";
import { TicketCreatedEvent } from "./ticket-created-listener";
import { Subject } from "./subjects";

export class TicketCreatedListener extends Listenner<TicketCreatedEvent> {
  subject: Subject.TikcetCreated = Subject.TikcetCreated;
  queueGroupName = "payment-service";

  onMessage(data: TicketCreatedEvent["data"], message: Message): void {
    console.log("Event data!", data);
    message.ack();
  }
}
