import { FormState as FS } from "formstate";
import { FieldState } from "./FieldState";

/** This FormState wrapper exposes a couple extra methods for easy-of-use. */
export class FormState<T> extends FS<{
  [key: string]: FieldState<any>;
}> {
  /** Retrieves the value from the element and maps it into a field. */
  public static onFieldChange = (
    fieldState: FieldState<any>,
    map: (value: string) => any = s => s
  ) => (ev: React.ChangeEvent<HTMLInputElement>) => {
    fieldState.onChange(map(ev.target.value));
  };
  private initialValue: T;

  constructor(init: T, fields: { [key: string]: FieldState<any> }) {
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
