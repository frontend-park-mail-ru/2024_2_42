'use strict';

import { BaseComponent } from '../base/base.js';

/**
 * Represents a Text Area Component.
 * @class
 */
export class TextAreaComponent extends BaseComponent {
    /**
     * The function that will handle the text area input event.
     * @type {Function}
     */
    #inputHandler = () => {};

    /**
     * Creates an instance of TextAreaComponent.
     * @constructor
     * @param {HTMLElement} parent - The parent element where the text area will be rendered.
     * @param {Object} [state] - The initial state of the text area component. (optional)
     * @param {Function} [inputHandler] - The function that will handle the text area input event. (optional)
     */
    constructor(parent, state = {}, inputHandler = () => {}) {
        super(parent, state);
        this.#inputHandler = inputHandler;
    }

    /**
     * Renders the text area component.
     * @returns {string} - The rendered HTML template of the text area.
     */
    renderTemplate() {
        const template = Handlebars.templates['input-text-area.hbs'];
        const renderedTemplate = template(this.State);

        const parent = this.Parent;
        if (parent) {
            parent.innerHTML += renderedTemplate;
        }

        this.attachEvents();

        return renderedTemplate;
    }

    /**
     * Attaches events to the rendered text area component.
     */
    attachEvents() {
        const parent = this.Parent;
        if (parent instanceof HTMLElement) {
            const textAreaElement = parent.querySelector('.input-area');
            if (textAreaElement) {
                textAreaElement.addEventListener('input', (event) => this.handleInput(event));

                if (this.State.autoExpand) {
                    textAreaElement.style.overflowY = 'hidden';
                }
            }
        }
    }

    /**
     * Handles the input event for the text area.
     * Adjusts the height if autoExpand is enabled.
     * @param {Event} event - The text area input event object.
     */
    handleInput(event) {
        if (typeof this.#inputHandler === 'function') {
            this.#inputHandler(event.target.value);
        }

        if (this.State.autoExpand) {
            event.target.style.height = 'auto';
            event.target.style.height = `${event.target.scrollHeight}px`;
        }
    }

    /**
     * Sets the input event handler for the text area.
     * @param {Function} inputHandler - The function to handle the text area input event.
     */
    setInputHandler(inputHandler) {
        this.#inputHandler = inputHandler;
    }

    /**
     * Gets the current input event handler for the text area.
     * @returns {Function} - The current input event handler.
     */
    getInputHandler() {
        return this.#inputHandler;
    }
}
