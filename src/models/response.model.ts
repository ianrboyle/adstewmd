export class ResponseClass<T> {
  result: T | null;
  error: Error | null;

  constructor(result: T | null = null, error: Error | null = null) {
    this.result = result;
    this.error = error;
  }
}
