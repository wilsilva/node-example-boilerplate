import * as uuid from "uuid";

export const generate = (): string => {
  return uuid.v4();
};

export const isValid = (uuidInput: string): boolean => {
  return uuid.validate(uuidInput);
};
