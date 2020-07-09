import { html, customElement, LitElement, property, TemplateResult } from 'lit-element';
import styles from './rating-bar-css';

@customElement('orxe-rating-bar')
export default class OrxeRatingBar extends LitElement {

  /**
   * This property is used to set Type of rating bar.
   */
  @property({ type: String })
  type = 'linear';

  /**
   * This property is used to set Rating.
   */
  @property({ type: Number })
  rating = 0;

  /**
   * This property is used to set the Label.
   */
  @property({ type: String })
  label = '';

  /**
   * This property is used to set the aria-label.
   */
  @property({ type: String, attribute: 'aria-label' })
  ariaLabel = '';

  public getRating() : Number {
    return this.rating/10;
  }

  private _renderRatingBar() : TemplateResult {
    if(this.type === 'donut')
      return this._renderDonutRatingBar();
    return this._renderLinearRatingBar();
  }

  private _renderLinearRatingBar(): TemplateResult {
    return html`
    <div class='rating-bar-linear'>
      <div class='track'></div>
      <div class='indicator ${this._getIndicatorClass()}-indicator' style="--indicator-percentage:${this.rating}%"></div>
      <div class='label'>
        <div class='text-label'>${this.label}</div>
        <div class='number-label'>${this.getRating()}</div>
      </div>
    </div>
    `;
  }

  private _renderDonutRatingBar(): TemplateResult {
    return html`
    <div class='rating-bar-donut'>
      <div class='track'></div>
      <svg viewBox="0 0 36 36" class="indicator">
        <path class="${this._getIndicatorClass()}-indicator"
          stroke-width = "${this.rating == 0 ? 0 : 4 }"
          stroke-dasharray="${this.rating}, 100"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div class=label>${this.getRating()}</div>
    <div>
    `;
  }

  private _getIndicatorClass() : string {
    const ratingScore = this.getRating();
    if(ratingScore <= 3 )
      return "bad"
    else if(ratingScore <= 5 )
      return "poor"
    else if(ratingScore <= 7 )
      return "average"
    else if(ratingScore <= 8.5 )
      return "great"
    else
      return "excellent"
  }

  private _addAriaLabel(): void {
    this.ariaLabel = `${this.label} ${this.getRating()} out of 10`;
  }
  
  render() {
    if(this.rating < 0)
      this.rating = 0
    else if(this.rating > 100)
      this.rating = 100
    if(this.ariaLabel === '')
      this._addAriaLabel();
    return this._renderRatingBar();  
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
