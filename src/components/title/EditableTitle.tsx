import { Input } from "forge-react-ds";
import { keys } from "mobx";
import { observer } from "mobx-react";
import React, { Validator } from "react";
import ITitle from "../../domain/models/ITitle";
import * as Validation from "../../shared/validation";

interface ITitleProps {
  title: ITitle;
  editTitle: (title: ITitle) => void;
}

@observer
export default class EditableTitle extends React.Component<ITitleProps> {
  private titleForm: Validation.FormStateWrapper<ITitle>;

  constructor(props: ITitleProps) {
    super(props);

    this.titleForm = new Validation.FormStateWrapper<ITitle>(this.props.title, {
      name: new Validation.FieldStateWrapper(this.props.title.name).validators(
        Validation.required,
        Validation.email
      ),
      price: new Validation.FieldStateWrapper<number>(
        this.props.title.price
      ).validators(Validation.required)
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
