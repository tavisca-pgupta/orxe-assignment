import { LitElement, TemplateResult } from 'lit-element';
export default class OrxeRatingBar extends LitElement {
    type: string;
    rating: number;
    label: string;
    getRating(): Number;
    private _renderRatingBar;
    render(): TemplateResult;
    static styles: import("lit-element").CSSResult;
}
