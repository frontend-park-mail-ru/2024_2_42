"use strict";
import { ButtonComponent } from "../../button/button.js";

/**
 * Represents an Image Card Component.
 * @class
 */
export class PinComponent {
	#parent;
	#state = {
		pinUrl: "", // путь к изображению
		boards: [], // список досок
		disabled: true, // флаг отключения по умолчанию
		userIcon: "",
		showText: false,
		buttons: {
			saveButton: {
				label: "Save to Board",
				type: "primary",
				disabled: true, // кнопка отключена по умолчанию
			},
			shareButton: {
				label: "",
				iconLeft: "",
				type: "link",
				disabled: true,
			},
			menuButton: {
				label: "",
				iconLeft: "",
				type: "link",
				disabled: true,
			},
		},
	};

	/**
	   * Creates an instance of InputComponent.
	   * @constructor
	   * @param {HTMLElement} parent - The parent element where the input will be rendered.
	   * @param {Object} [state=this.#state] - The initial state of the input component. (optional)
	   */
	constructor(parent, state = this.#state) {
		this.#parent = parent;
		this.#state = { ...this.#state, ...state };
	}

	/**
	  * Renders the input component.
	  * @returns {string} - The rendered HTML template of the input.
	  */
	renderTemplate() {
		const template = Handlebars.templates["pin.hbs"];
		const renderedTemplate = template(this.#state);

		if (this.#parent) {
			this.#parent.innerHTML = renderedTemplate;

			// Проверяем контейнеры для кнопок
			const saveBtnContainer = this.#parent.querySelector(
				".pin__save-button",
			);
			const shareBtnContainer = this.#parent.querySelector(
				".pin__share-button",
			);
			const menuBtnContainer = this.#parent.querySelector(
				".pin__save-button-container",
			);

			if (!saveBtnContainer) {
				console.error("Save button container not found.");
			}
			if (!shareBtnContainer) {
				console.error("Share button container not found.");
			}
			if (!menuBtnContainer) {
				console.error("Menu button container not found.");
			}

			// Рендерим кнопки только если контейнеры найдены
			if (saveBtnContainer) {
				new ButtonComponent(
					saveBtnContainer,
					this.#state.buttons.saveButton,
				).renderTemplate();
			}
			if (shareBtnContainer) {
				new ButtonComponent(
					shareBtnContainer,
					this.#state.buttons.shareButton,
				).renderTemplate();
			}
			if (menuBtnContainer) {
				new ButtonComponent(
					menuBtnContainer,
					this.#state.buttons.menuButton,
				).renderTemplate();
			}
		} else {
			console.error("Parent container for PinComponent is not found.");
		}

		return renderedTemplate;
	}

	/**
	   * Updates the state of the input component.
	   * @param {Object} newState - The new state object containing the changed props.
	   */
	setState(newState) {
		this.#state = { ...this.#state, ...newState };
		this.renderTemplate();
	}

	/**
	   * Retrieves the current state of the input component.
	   * @returns {Object} - The current state object.
	   */
	getState() {
		return this.#state;
	}

	/**
	   * Changes the state of pin depending on a new state.
	   * @param {Object} newState - The new state object containing the changed props.
	   */
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
