/// Used to send logs to Humio
/// Exactly matches Humio's API: https://docs.humio.com/api/ingest-api/
export class UnstructuredLog {
  readonly messages: string[];
  readonly fields?: object;
  readonly tags?: object;
  readonly type?: string;
}
