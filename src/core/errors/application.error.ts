export default interface IApplicationError extends Error {
  httpResponseStatusCode: number;
}
