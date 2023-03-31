export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'error name'],
      [2, 'error type'],
      [3, 'error data'],
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
