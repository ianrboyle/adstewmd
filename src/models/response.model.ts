export class ApiResponse<T = unknown> {
  constructor(
    public data: T | null,
    public success: boolean,
    public status: number,
    public error?: { message: string } | string
  ) {}

  static success<T>(data: T, status = 200): ApiResponse<T> {
    return new ApiResponse(data, true, status);
  }

  static failure<T>(message: string, status = 400): ApiResponse<T> {
    return new ApiResponse<T>(null, false, status, { message });
  }

  isSuccess(): boolean {
    return this.success && !this.error;
  }
}
