"use strict";
import { ButtonComponent } from "../../button.js";

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

  constructor(parent, state = this.#state) {
    this.#parent = parent;
    this.#state = { ...this.#state, ...state };
  }

  renderTemplate() {
    const template = Handlebars.templates["pin.hbs"];
    const renderedTemplate = template(this.#state);

    if (this.#parent) {
      this.#parent.innerHTML = renderedTemplate;

      // Проверяем контейнеры для кнопок
      const saveBtnContainer = this.#parent.querySelector(
        ".save-button-container",
      );
      const shareBtnContainer = this.#parent.querySelector(
        ".share-button-container",
      );
      const menuBtnContainer = this.#parent.querySelector(
        ".menu-pbuttonin-container",
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
