"use strict";

/**
 * Represents a Button Component.
 * @class
 */
export class ButtonComponent {
  /**
   * The parent element where the button will be rendered.
   * @type {HTMLElement}
   */
  #parent;

  /**
   * The state of the button component.
   * @type {Object}
   * @property {string} label - The label text of the button.
   * @property {string} iconLeft - The SVG icon on the left side of the button.
   * @property {string} iconRight - The SVG icon on the right side of the button.
   * @property {string} type - The type of the button (primary, secondary, link).
   * @property {boolean} disabled - The state of the button (enabled or disabled).
<<<<<<< HEAD
   * @property {boolean} hover - The hover state of the button.
   * @property {boolean} active - The active/pressed state of the button.
=======
>>>>>>> dev
   */
  #state = {
    label: "Click Me",
    iconLeft: "",
    iconRight: "",
    type: "primary",
    disabled: false,
<<<<<<< HEAD
    hover: false,
    active: false,
=======
>>>>>>> dev
  };

  /**
   * The function that will handle the button click event.
   * @type {Function}
   */
  #clickHandler = () => {};

  /**
   * Creates an instance of ButtonComponent.
   * @constructor
   * @param {HTMLElement} parent - The parent element where the button will be rendered.
   * @param {Object} [state=this.#state] - The initial state of the button component. (optional)
   * @param {Function} [clickHandler=this.#clickHandler] - The function that will handle the button click event. (optional)
   */
  constructor(parent, state = this.#state, clickHandler = this.#clickHandler) {
    this.#parent = parent;
    this.#state = { ...this.#state, ...state };
    this.#clickHandler = clickHandler;
  }

  /**
   * Renders the button component.
   * @returns {string} - The rendered HTML template of the button.
   */
  renderTemplate() {
<<<<<<< HEAD
    if (!this.#parent) {
      console.error("Parent container for ButtonComponent is not found.");
      return;
    }

    // Создание шаблона кнопки (допустим, в Handlebars)
    const template = Handlebars.templates["button.hbs"];
    const renderedTemplate = template(this.#state);

    this.#parent.innerHTML = renderedTemplate;

    // Предполагается, что кнопка создается с классом '.button'
    const buttonElement = this.#parent.querySelector(".button");

    // Проверяем, существует ли элемент кнопки
    if (buttonElement) {
      buttonElement.addEventListener("click", this.#state.onClick);
    } else {
      console.error("Button element not found in ButtonComponent.");
=======
    const template = Handlebars.templates["button.hbs"];
    const renderedTemplate = template(this.#state);

    if (this.#parent) {
      this.#parent.innerHTML = renderedTemplate;
      const buttonElement = this.#parent.querySelector("button");
      buttonElement.addEventListener(
        "click",
        this.handleButtonClick.bind(this),
      );
    }

    return renderedTemplate;
  }

  /**
   * Updates the state of the button component.
   * @param {Object} newState - The new state object containing the changed props.
   */
  setState(newState) {
    this.#state = { ...this.#state, ...newState };
    this.renderTemplate(); // Re-render the button with updated state.
  }

  /**
   * Retrieves the current state of the button component.
   * @returns {Object} - The current state object.
   */
  getState() {
    return this.#state;
  }

  /**
   * Handles the button click event.
   * @param {Event} event - The button click event object.
   */
  handleButtonClick(event) {
    // Prevent event from bubbling up the DOM tree
    event.stopPropagation();

    if (typeof this.#clickHandler === "function" && !this.#state.disabled) {
      this.#clickHandler(event);
>>>>>>> dev
    }
  }

  /**
<<<<<<< HEAD
   * Updates the state of the button component.
   * @param {Object} newState - The new state object containing the changed props.
   */
  setState(newState) {
    this.#state = { ...this.#state, ...newState };
    this.renderTemplate(); // Re-render the button with updated state.
  }

  /**
   * Retrieves the current state of the button component.
   * @returns {Object} - The current state object.
   */
  getState() {
    return this.#state;
  }

  /**
   * Handles the button click event.
   * @param {Event} event - The button click event object.
   */
  handleButtonClick(event) {
    if (typeof this.#clickHandler === "function" && !this.#state.disabled) {
      this.#clickHandler(event);
    }
  }

  /**
   * Sets the click event handler for the button.
   * @param {Function} clickHandler - The function to handle the button click event.
   */
  setClickHandler(clickHandler) {
    this.#clickHandler = clickHandler;
  }

  /**
=======
   * Sets the click event handler for the button.
   * @param {Function} clickHandler - The function to handle the button click event.
   */
  setClickHandler(clickHandler) {
    this.#clickHandler = clickHandler;
  }

  /**
>>>>>>> dev
   * Gets the current click event handler for the button.
   * @returns {Function} - The current click event handler.
   */
  getClickHandler() {
    return this.#clickHandler;
  }
}
