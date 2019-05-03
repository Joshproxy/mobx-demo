import { FieldState as FS } from "formstate";

/** Wraps the FieldState class to map from input element value to field value. */
export class FieldState<T> extends FS<T> {
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
