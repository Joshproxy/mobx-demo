import { observer } from "mobx-react";
import React from "react";

interface ITitleProps {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  format?: string;
  addTitleToCart: () => void;
}

export const Title: React.SFC<ITitleProps> = observer(
  ({ id, title, description, price, format, addTitleToCart }: ITitleProps) => (
    <aside>
      <div className="wrapper">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Price: {price}</p>
        <p>Format: {format}</p>
        <button onClick={addTitleToCart} className="addButton">
          Add To Cart
        </button>
      </div>
    </aside>
  )
);
