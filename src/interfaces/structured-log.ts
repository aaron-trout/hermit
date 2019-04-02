/// Used to send logs to Humio
/// Exactly matches Humio's API: https://docs.humio.com/api/ingest-api/
export class StructuredLog {
  readonly events: Array<{
    timestamp: Date;
    attributes?: object;
  }>;
  readonly tags: object;
}
