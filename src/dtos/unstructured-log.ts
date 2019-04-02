/// Used by the client to send logs to hermit
/// Used to isolates clients from changes to Humio's API
export class UnstructuredLogDto {
  readonly messages: string[];
  readonly fields?: object;
  readonly tags?: object;
  readonly type?: string;
}
