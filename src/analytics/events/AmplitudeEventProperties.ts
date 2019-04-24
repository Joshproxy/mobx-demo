

export abstract class AmplitudeEventProperty<T> {
    name: string;
    value: T;
    constructor(name: string, val: T) {
        this.name = name;
        this.value = val;
    }
}

export class CustomProperty<T> extends AmplitudeEventProperty<T> {
    constructor(name: string, value: T) {
        super(name, value);
    }
}

export class CartIdProperty extends AmplitudeEventProperty<number> {
    constructor(id: number) {
        super("Cart Id", id);
    }
}
