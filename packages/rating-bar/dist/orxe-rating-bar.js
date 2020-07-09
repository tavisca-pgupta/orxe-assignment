var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement, property } from 'lit-element';
import styles from './rating-bar-css';
let OrxeRatingBar = class OrxeRatingBar extends LitElement {
    constructor() {
        super(...arguments);
        this.type = 'linear';
        this.rating = 0;
        this.label = '';
    }
    getRating() {
        return this.rating / 10;
    }
    _renderRatingBar() {
        return html ``;
    }
    render() {
        return html `
      <p>Hello, Welcome to lit Elements</p>
    `;
    }
};
OrxeRatingBar.styles = styles;
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], OrxeRatingBar.prototype, "type", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], OrxeRatingBar.prototype, "rating", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], OrxeRatingBar.prototype, "label", void 0);
OrxeRatingBar = __decorate([
    customElement('orxe-rating-bar')
], OrxeRatingBar);
export default OrxeRatingBar;
