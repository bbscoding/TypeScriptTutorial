export interface Item {
    id: string,
    item: string,
    checked: boolean,
}

// export default class ListItem implements Item {
//     id: string
//     item: string
//     checked: boolean
//     constructor(ListItem: Item) {
//         this.id = ListItem.id
//         this.item = ListItem.item
//         this.checked = ListItem.checked
//     }
// }

export default class ListItem implements Item {
    private _id: string;
    private _item: string;
    private _checked: boolean;

    constructor(
        _id: string = '',
        _item: string = '',
        _checked: boolean = false,
    ) {
        this._id = _id;
        this._item = _item;
        this._checked = _checked;
    }

    get id(): string {
        return this._id
    }
    get item(): string {
        return this._item
    }
    get checked(): boolean {
        return this._checked
    }
    set id(id: string) {
        this._id = id
    }
    set item(item: string) {
        this._item = item
    }
    set checked(checked: boolean) {
        this._checked = checked
    }
}