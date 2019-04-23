import React from 'react';
import { extendObservableObjectWithProperties } from 'mobx/lib/internal';

type TitleProps = {
    id?: number,
    title?: string,
    description?: string,
    price?: number,
    format?: string,
    addTitleToCart: () => void
}

export const Title = ({id, title, description, price, format, addTitleToCart}: TitleProps) => <aside>
    <div className="wrapper">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Price: {price}</p>
        <p>Format: {format}</p>
        <button onClick={addTitleToCart} className="addButton">Add To Cart</button>
    </div>
</aside>

