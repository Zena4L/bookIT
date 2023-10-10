import nats, { Stan } from "node-nats-streaming";

class NattsWrapper {
  private _client?: Stan;
  get client() {
    if (!this._client) {
      throw new Error("Cannot access NATS client before connection");
    }

    return this._client;
  }

  async connect(
    clusterId: string,
    clientId: string,
    url: string
  ): Promise<void> {
    this._client = nats.connect(clusterId, clientId, { url });

    return new Promise<void>((resolve, reject) => {
      this.client.on("connect", () => {
        console.log("Connected to NATS");
        resolve();
      });

      this.client.on("error", (err) => {
        console.error("Error connecting to NATS:", err);
        reject(err);
      });
    });
  }
}

export const nattsWrapper = new NattsWrapper();
