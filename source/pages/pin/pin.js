'use strict';
import { ButtonComponent } from '../../components/button/button.js';

/**
 * Represents an Image Card Component.
 * @class
 */
export class PinComponent {
    #parent;
    #state = {
        pinUrl: '', // путь к изображению
        boards: [], // список досок
        disabled: true, // флаг отключения по умолчанию
        userIcon: '',
        showText: false,
        buttons: {
            saveButton: {
                label: 'Save to Board',
                type: 'primary',
                disabled: true // кнопка отключена по умолчанию
            },
            shareButton: {
                label: '',
                iconLeft: '',
                type: 'link',
                disabled: true
            },
            menuButton: {
                label: '',
                iconLeft: '',
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

    setBoardsInPin(newState) {
        this.#state = { ...this.#state, ...newState };
    
        // Если есть доски, активировать select и кнопку сохранения
        if (this.#state.boards.length > 0) {
            this.#state.disabled = false;
            this.#state.buttons.saveButton.disabled = false;
        } else {
            // Если досок нет, отключить select и кнопку сохранения
            this.#state.disabled = true;
            this.#state.buttons.saveButton.disabled = true;
        }
    
        this.renderTemplate();
    }
    
}
