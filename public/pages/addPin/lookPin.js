import { BaseComponent } from '../../components/base/base.js';
import { PinComponent } from '../../components/complex/pin/pin.js';
import { ButtonComponent } from '../../components/button/button.js';

export default class LookPin extends BaseComponent {
  #pin;
  constructor(parent, pin) {
    super(parent);
    this.#pin = pin;
  }

  renderTemplate() {
    const template = Handlebars.templates['lookPin.hbs'];
    const saveButton = new ButtonComponent(this.Parent, {
      label: 'Сохранить',
      type: 'primary',
      disabled: false,
      className: 'lookpin-button',
    });
    const rewardButton = new ButtonComponent(this.Parent, {
      label: 'Наградить',
      type: 'primary',
      disabled: false,
      className: 'lookpin-button',
    });
    const renderedTemplate = template({
      saveButton: saveButton.renderTemplate(),
      rewardButton: rewardButton.renderTemplate(),
    });
    this.Parent.innerHTML += renderedTemplate;
  }
}
