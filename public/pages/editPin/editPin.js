import { BaseComponent } from '../../components/base/base.js';
import { PinComponent } from '../../components/complex/pin/pin.js';
import { ButtonComponent } from '../../components/button/button.js';
import { InputComponent } from '../../components/input/input.js';

export default class EditPin extends BaseComponent {
  #pin;
  constructor(parent, pin) {
    super(parent);
    this.#pin = pin;
  }

  renderTemplate() {
    const template = Handlebars.templates['editPin.hbs'];
    const nameInput = new InputComponent(this.Parent, {
      inputPlaceholder: 'Добавьте название',
      typeOfInput: 'text',
    });
    const HtmlData = nameInput.renderTemplate();
    const renderedTemplate = template({
      nameInput: HtmlData,
    });
    this.Parent.innerHTML += renderedTemplate;
  }
}
