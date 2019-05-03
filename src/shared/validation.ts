import { FieldState, FormState, ValidatorResponse } from "formstate";

// https://formstate.github.io/#/

export const required: <T>(value: T) => ValidatorResponse = <T extends any>(
  val: T
) => !val && "required";

export const email: (value: string) => ValidatorResponse = (val: string) =>
  val.indexOf("@") === -1 && "not an email";

// tslint:disable-next-line: max-classes-per-file
/** Wraps the FieldState class to map from input element value to field value. */
export class FieldStateWrapper<T> extends FieldState<T> {
  constructor(initialValue: T) {
    super(initialValue);
  }

  /** Maps the target input element value to the field value with optional map function. */
  public onInputChange = <I extends HTMLInputElement = HTMLInputElement>(
    map: (value: string) => any = s => s
  ) => (ev: React.ChangeEvent<I>) => {
    this.onChange(map(ev.target.value));
  };
}

/** This FormState wrapper exposes a couple extra methods for easy-of-use. */
// tslint:disable-next-line: max-classes-per-file
export class FormStateWrapper<T> extends FormState<{
  [key: string]: FieldStateWrapper<any>;
}> {
  /** Retrieves the value from the element and maps it into a field. */
  public static onFieldChange = (
    fieldState: FieldStateWrapper<any>,
    map: (value: string) => any = s => s
  ) => (ev: React.ChangeEvent<HTMLInputElement>) => {
    fieldState.onChange(map(ev.target.value));
  };
  private initialValue: T;

  constructor(init: T, fields: { [key: string]: FieldStateWrapper<any> }) {
    super(fields);
    this.initialValue = init;
  }
  /** Retrieves the entire object with any edited field values. */
  public toValue(t?: T): T {
    const tFields = Object.keys(this.$).map(k => {
      return { [k]: this.$[k].value };
    });
    let mergedFields = {};
    tFields.forEach(f => {
      mergedFields = { ...mergedFields, ...f };
    });
    return {
      ...this.initialValue,
      ...t,
      ...mergedFields
    };
  }
}
