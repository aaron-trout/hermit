/// Used by the client to send logs to hermit
/// Used to isolates clients from changes to Humio's API
export class StructuredLogDto {
  readonly tags: object;
  readonly events: Array<{
    timestamp: Date | string;
    attributes?: object;
  }>;
}
