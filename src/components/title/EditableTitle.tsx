import { Input } from "forge-react-ds";
import {
  ComposibleValidatable,
  FieldState,
  FormState,
  ValidatorResponse
} from "formstate";
import { keys } from "mobx";
import { observer } from "mobx-react";
import React, { Validator } from "react";
import ITitle from "../../domain/models/ITitle";

interface ITitleProps {
  title: ITitle;
  editTitle: (title: ITitle) => void;
}

// https://formstate.github.io/#/

const required: <T>(value: T) => ValidatorResponse = <T extends any>(val: T) =>
  !val && "required";

const email: (value: string) => ValidatorResponse = (val: string) =>
  val.indexOf("@") === -1 && "not an email";

// tslint:disable-next-line: max-classes-per-file
/** Wraps the FieldState class to map from input element value to field value. */
class FieldStateWrapper<T> extends FieldState<T> {
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
class FormStateWrapper<T> extends FormState<{
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

// tslint:disable-next-line: max-classes-per-file
@observer
export default class EditableTitle extends React.Component<ITitleProps> {
  private titleForm: FormStateWrapper<ITitle>;

  constructor(props: ITitleProps) {
    super(props);

    this.titleForm = new FormStateWrapper<ITitle>(this.props.title, {
      name: new FieldStateWrapper(this.props.title.name).validators(
        required,
        email
      ),
      price: new FieldStateWrapper<number>(this.props.title.price).validators(
        required
      )
    });
  }

  public editTitleClick = () => {
    if (!this.titleForm.hasError) {
      this.props.editTitle(this.titleForm.toValue());
    }
  };

  public render() {
    const title = this.props.title;
    const form = this.titleForm;
    return (
      <aside>
        <div className="wrapper">
          <Input
            id="nameChange"
            name="name"
            onChange={form.$.name.onInputChange()}
            value={form.$.name.value}
          />
          <p className="validationError">{form.$.name.error}</p>
          <p>{title.description}</p>
          <Input
            id="priceChange"
            name="price"
            type="number"
            onChange={form.$.price.onInputChange(s => parseInt(s, 10))}
            value={form.$.price.value}
          />
          <p className="validationError">{form.$.price.error}</p>
          <p>Format: {title.format}</p>
          <button onClick={this.editTitleClick} className="addButton">
            Edit
          </button>
          <p className="validationError">The form has an error: {form.error}</p>
        </div>
      </aside>
    );
  }
}
