import { Input } from "forge-react-ds";
import { FieldState, FormState, ValidatorResponse } from "formstate";
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
class FormHelper<T> extends FormState<any> {
  public static onFieldChange = (
    fieldState: FieldState<any>,
    map: (value: string) => any = s => s
  ) => (ev: React.ChangeEvent<HTMLInputElement>) => {
    fieldState.onChange(map(ev.target.value));
  };
  private initialValue: T;

  constructor(init: T, fields: any) {
    super(fields);
    this.initialValue = init;
  }
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
class TitleForm extends FormState<Array<FieldState<any>>> {
  public nameField: FieldState<string>;
  public priceField: FieldState<number>;

  constructor(private title: ITitle) {
    super([]);
    this.nameField = new FieldState(title.name).validators(required);
    this.priceField = new FieldState(title.price).validators(required);
    this.$.push(this.nameField, this.priceField);
  }

  public onFieldChange = (fieldState: FieldState<any>) => (
    ev: React.ChangeEvent<HTMLInputElement>
  ) => {
    fieldState.onChange(ev.target.value);
  };

  public toValue(title?: ITitle): ITitle {
    return {
      ...this.title,
      ...title,
      name: this.nameField.value,
      price: this.priceField.value
    };
  }
}

// tslint:disable-next-line: max-classes-per-file
@observer
export default class EditableTitle extends React.Component<ITitleProps> {
  private titleForm: FormHelper<ITitle>;

  constructor(props: ITitleProps) {
    super(props);

    this.titleForm = new FormHelper<ITitle>(this.props.title, {
      name: new FieldState(this.props.title.name).validators(required, email),
      price: new FieldState<number>(this.props.title.price).validators(required)
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
            onChange={FormHelper.onFieldChange(form.$.name)}
            value={form.$.name.value}
          />
          <p className="error">{form.$.name.error}</p>
          <p>{title.description}</p>
          <Input
            id="priceChange"
            name="price"
            type="number"
            onChange={FormHelper.onFieldChange(form.$.price, s =>
              parseInt(s, 10)
            )}
            value={form.$.price.value}
          />
          <p>{form.$.price.error}</p>
          <p>Format: {title.format}</p>
          <button onClick={this.editTitleClick} className="addButton">
            Edit
          </button>
          <p>{form.error}</p>
        </div>
      </aside>
    );
  }
}
