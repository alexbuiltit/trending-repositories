export interface CustomError extends Error {
  displayMessage?: string;
}

export interface ErrorHandling {
  success?: boolean;
  error?: CustomError;
}
