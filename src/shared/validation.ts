import { FieldState, FormState, ValidatorResponse } from "formstate";

// https://formstate.github.io/#/

type ValidatorLogic<TValue> = (value: TValue) => boolean;
type Validation = <TValue>(
  validator: ValidatorLogic<TValue>
) => (errorMessage: string) => (value: TValue) => ValidatorResponse;

const CreateValidation: Validation = <T extends any>(
  validator: ValidatorLogic<T>
) => (errorMessage: string) => (value: T) =>
  (validator(value) && errorMessage) as ValidatorResponse;

const requiredLogic: ValidatorLogic<any> = value => !value;
const emailLogic: ValidatorLogic<string> = value =>
  value.indexOf("@") === -1 || value.indexOf(".") === -1;

export const Required = CreateValidation<any>(requiredLogic);
export const Email = CreateValidation<string>(emailLogic);
