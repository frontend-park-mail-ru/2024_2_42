'use strict';

import { BaseComponent } from '../base/base.js';

export class ButtonComponent extends BaseComponent {
  #clickHandler = () => {};

  /**
   * Creates an instance of ButtonComponent.
   * @constructor
   * @param {HTMLElement} parent - The parent element where the button will be rendered.
   * @param {Object} [state] - The initial state of the button component. (optional)
   * @param {Function} [changeHandler] - The function that will handle the button events. (optional)
   */
  constructor(parent, state, clickHandler) {
    super(parent, state);
    this.#clickHandler = clickHandler || this.#clickHandler;
  }

  /**
   * Renders the button component.
   * @returns {string} - The rendered HTML template of the button.
   */
  renderTemplate() {
    const template = Handlebars.templates['button.hbs'];
    const renderedTemplate = template(this.State);

    return renderedTemplate;
  }

  /**
   * Handles the button click event.
   * @param {Event} event - The button click event object.
   */
  handleButtonClick(event) {
    event.stopPropagation();
    if (typeof this.#clickHandler === 'function' && !this.State.disabled) {
      this.#clickHandler(event);
    }
  }

  /**
   * Sets the click event handler for the button.
   * @param {Function} changeHandler - The function to handle the button click event.
   */
  setClickHandler(clickHandler) {
    this.#clickHandler = clickHandler;
  }

  /**
   * Gets the current click event handler for the button.
   * @returns {Function} - The current click event handler.
   */
  getClickHandler() {
    return this.#clickHandler;
  }
}
