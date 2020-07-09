import { OrxeRatingBar } from '../';
import "../index"

describe('orxe-rating-bar', () => {
  let orxeRatingBar: OrxeRatingBar;

  beforeEach(async function() {
    document.body.appendChild(document.createElement('orxe-rating-bar'));
    orxeRatingBar = document.querySelector('orxe-rating-bar') as OrxeRatingBar;
  });

  afterEach(async function() {
    await orxeRatingBar.remove();
  });

  it('Check default value for properties', () => {
    expect(orxeRatingBar.type).toEqual('linear');
    expect(orxeRatingBar.label).toEqual('');
    expect(orxeRatingBar.rating).toEqual(0);
    expect(orxeRatingBar.ariaLabel).toEqual(" 0 out of 10");
  });

  it('Check value for properties when they are specified', () => {
    orxeRatingBar.setAttribute('type', 'linear');
    orxeRatingBar.setAttribute('label', 'Experience');
    orxeRatingBar.setAttribute('rating', '30');
    
    expect(orxeRatingBar.type).toEqual('linear');
    expect(orxeRatingBar.label).toEqual('Experience');
    expect(orxeRatingBar.rating).toEqual(30);
  });

  it('Check value for aria-label when it is specified', () => {
    orxeRatingBar.setAttribute('aria-label', 'Experience 7.1 out of 10');  

    expect(orxeRatingBar.ariaLabel).toEqual('Experience 7.1 out of 10');
    });
});