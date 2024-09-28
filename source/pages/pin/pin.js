'use strict';
import { ButtonComponent } from '../../components/button/button.js';

/**
 * Represents an Image Card Component.
 * @class
 */
export class PinComponent {
    #parent;
    #state = {
        pinUrl: './pages/photo_2023-06-29_22-58-29.jpg',
        board: '',
        disabled: false,
        userIcon: '',
        showText: false,
        buttons: {
            saveButton: {
                label: 'Save to Board',
                type: 'primary',
                disabled: true
            },
            shareButton: {
                label: '',
                iconLeft: '',
                type: 'link',
                disabled: true
            },
            menuButton: {
                label: '',
                iconLeft: './pages/share.svg',
                type: 'link',
                disabled: true
            }
        }
    };

    constructor(parent, state = this.#state) {
        this.#parent = parent;
        this.#state = { ...this.#state, ...state };
    }

    renderTemplate() {
        const template = Handlebars.templates['pin.hbs'];
        const renderedTemplate = template(this.#state);

        if (this.#parent) {
            this.#parent.innerHTML = renderedTemplate;

            // Initialize buttons using ButtonComponent
            const saveBtnContainer = this.#parent.querySelector('.save-pin-container');
            const shareBtnContainer = this.#parent.querySelector('.share-pin-container');
            const menuBtnContainer = this.#parent.querySelector('.menu-pin-container');

            new ButtonComponent(saveBtnContainer, this.#state.buttons.saveButton).renderTemplate();
            new ButtonComponent(shareBtnContainer, this.#state.buttons.shareButton).renderTemplate();
            new ButtonComponent(menuBtnContainer, this.#state.buttons.menuButton).renderTemplate();
        }

        return renderedTemplate;
    }

    setState(newState) {
        this.#state = { ...this.#state, ...newState };
        this.renderTemplate();
    }

    getState() {
        return this.#state;
    }
}
