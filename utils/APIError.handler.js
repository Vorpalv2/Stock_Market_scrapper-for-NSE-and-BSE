class APIError extends Error {
  constructor(message = "Something went wrong", errcode, success = false) {
    super(message);
    this.errcode = errcode;
    this.success = success;
  }
}

export { APIError };
