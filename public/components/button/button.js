'use strict';
import { BaseComponent } from '../../components/BaseComponent.js';

export class ButtonComponent extends BaseComponent {
    #clickHandler = () => { };

    constructor(parent, state, clickHandler) {
        super(parent, state);
        this.#clickHandler = clickHandler || this.#clickHandler;
    }

    renderTemplate() {
        const template = Handlebars.templates['button.hbs'];
        const renderedTemplate = template(this.getState());

        const parent = this.getParent();
        if (parent) {
            parent.innerHTML = renderedTemplate;
            const buttonElement = parent.querySelector('button');
            buttonElement.addEventListener('click', this.handleButtonClick.bind(this));
        }

        return renderedTemplate;
    }

    handleButtonClick(event) {
        event.stopPropagation();
        if (typeof this.#clickHandler === 'function' && !this.getState().disabled) {
            this.#clickHandler(event);
        }
    }

    setClickHandler(clickHandler) {
        this.#clickHandler = clickHandler;
    }

    getClickHandler() {
        return this.#clickHandler;
    }
}
