import { Input } from "forge-react-ds";
import { observer } from "mobx-react";
import React, { Validator } from "react";
import ITitle from "../../domain/models/ITitle";
import { FieldState } from "../../shared/FieldState";
import { FormState } from "../../shared/FormState";
import * as Validation from "../../shared/Validation";

interface ITitleProps {
  title: ITitle;
  editTitle: (title: ITitle) => void;
}

@observer
export default class EditableTitle extends React.Component<ITitleProps> {
  private titleForm: FormState<ITitle>;

  constructor(props: ITitleProps) {
    super(props);

    this.titleForm = new FormState<ITitle>(this.props.title, {
      name: new FieldState(this.props.title.name).validators(
        Validation.Required("Title is required"),
        Validation.Email("Title must be an email")
      ),
      price: new FieldState<number>(this.props.title.price).validators(
        Validation.Required("Price is required")
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
          {form.hasError && (
            <p className="validationError">
              The form has an error: {form.error}
            </p>
          )}
        </div>
      </aside>
    );
  }
}
